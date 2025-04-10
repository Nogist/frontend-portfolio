"use server"; // pages/api/send-sms.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

type MailjetSmsResponse = {
  MessageId: string;
  SmsCount: number;
  SentAt: string;
  To: string;
};

type Data = {
  success: boolean;
  data?: MailjetSmsResponse;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const { phone, message } = req.body;

  if (!phone || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Phone and message are required" });
  }

  const apiKey = process.env.MJ_APIKEY_PUBLIC || "";
  const apiSecret = process.env.MJ_APIKEY_PRIVATE || "";
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  try {
    const response = await axios.post<MailjetSmsResponse>(
      "https://api.mailjet.com/v4/sms-send",
      {
        Text: message,
        To: phone,
        From: "YourSenderName", // This must be Mailjet-approved
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ ErrorMessage: string }>;

    const errorMsg =
      axiosError.response?.data?.ErrorMessage ||
      axiosError.message ||
      "An unknown error occurred";

    console.error("SMS error:", errorMsg);
    return res.status(500).json({ success: false, error: errorMsg });
  }
}
