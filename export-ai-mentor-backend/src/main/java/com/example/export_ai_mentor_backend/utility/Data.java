package com.example.export_ai_mentor_backend.utility;

public class Data {

    public static String getMessageBody(String genOtp, String name) {

        return "<!DOCTYPE html>" +
                "<html lang='en'>" +
                "<head>" +
                "<meta charset='UTF-8' />" +
                "<meta name='viewport' content='width=device-width, initial-scale=1.0' />" +
                "<title>Email Verification</title>" +
                "</head>" +
                "<body style='font-family: Arial, Helvetica, sans-serif; background-color: #f4f6f8; margin: 0; padding: 0;'>" +
                "<table role='presentation' width='100%' cellpadding='0' cellspacing='0' style='padding:20px 0;'>" +
                "<tr>" +
                "<td align='center'>" +
                "<table width='480' cellpadding='0' cellspacing='0' style='background:#ffffff; border-radius:10px; padding:24px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.06);'>" +
                "<tr>" +
                "<td style='font-size:22px; font-weight:bold; color:#0b69ff;'>Export AI Mentor</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='padding:16px 0 6px 0; font-size:18px; color:#333;'>Email Verification Code</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='padding:6px 0 12px 0; color:#555; font-size:14px;'>" +
                "Hi " + name + ", use the code below to verify your account.<br/>This code will expire in 4 minutes." +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='padding:16px 0;'>" +
                "<div style='display:inline-block; background:#f0f5ff; color:#0b69ff; font-size:28px; font-weight:700; letter-spacing:6px; padding:12px 28px; border-radius:8px;'>" +
                genOtp +
                "</div>" +
                "</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='padding-top:10px; font-size:13px; color:#888;'>If you didn’t request this, you can safely ignore this email.</td>" +
                "</tr>" +
                "<tr>" +
                "<td style='padding-top:20px; font-size:12px; color:#aaa;'>© Export AI Mentor • All rights reserved</td>" +
                "</tr>" +
                "</table>" +
                "</td>" +
                "</tr>" +
                "</table>" +
                "</body>" +
                "</html>";
    }
}
