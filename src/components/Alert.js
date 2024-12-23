import React from "react";

export default function Alert(props) {
  if (!props.alert) return null; // If no alert is provided, don't render anything

  // Map the alert types to their respective styles
  const alertStyles = {
    success: "text-green-800 bg-green-50 dark:bg-green-800 dark:text-green-400",
    danger: "text-red-800 bg-red-50 dark:bg-red-800 dark:text-red-400",
    warning:
      "text-yellow-800 bg-yellow-50 dark:bg-yellow-800 dark:text-yellow-400",
    info: "text-blue-800 bg-blue-50 dark:bg-blue-800 dark:text-blue-400",
  };

  // Fallback to a default style if an unrecognized type is passed
  const alertClass = alertStyles[props.alert.type] || alertStyles.info;

  return (
    <div
      id="alert-1"
      className={`fixed top-8 right-6 z-50 rounded-lg shadow-lg p-4 ${alertClass}`}
      role="alert">
      <p className="text-sm font-medium text-center">{props.alert.message}</p>
    </div>
  );
}
