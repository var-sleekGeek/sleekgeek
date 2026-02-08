<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize inputs
    $full_name = htmlspecialchars(trim($_POST["full_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = htmlspecialchars(trim($_POST["service"]));
    $budget = htmlspecialchars(trim($_POST["budget"]));
    $details = htmlspecialchars(trim($_POST["details"]));

    // Checkboxes
    $agree_privacy = isset($_POST["agree_privacy"]);
    $agree_terms = isset($_POST["agree_terms"]);

    // Validate required fields
    if (
        empty($full_name) ||
        empty($email) ||
        empty($service) ||
        empty($budget) ||
        empty($details)
    ) {
        die("Please fill out all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    if (!$agree_privacy || !$agree_terms) {
        die("You must agree to the Privacy Policy and Terms of Service.");
    }

    // Email settings
    $to = "franklin@sleekgeek.ca";
    $subject = "New Project Inquiry from $full_name";

    $body = "New inquiry received:\n\n";
    $body .= "Full Name: $full_name\n";
    $body .= "Email: $email\n";
    $body .= "Service Needed: $service\n";
    $body .= "Project Budget: $budget\n\n";
    $body .= "Project Details:\n$details\n\n";
    $body .= "Agreed to Privacy Policy: Yes\n";
    $body .= "Agreed to Terms of Service: Yes\n";

    $headers = "From: $full_name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
