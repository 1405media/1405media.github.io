<?php
/**
 * Secure PHP Email Form Handler for 1405Media
 * Configured for: 1405media@gmail.com
 */

// 1. Set your receiving email
$receiving_email_address = '1405media@gmail.com';

// 2. Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 403 Forbidden');
    die('Access denied');
}

// 3. Basic validation
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($_POST[$field])) {
        header('HTTP/1.1 400 Bad Request');
        die('Please fill all required fields');
    }
}

// 4. Validate email format
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    header('HTTP/1.1 400 Bad Request');
    die('Invalid email address');
}

// 5. Load the email library
$library_path = '../assets/vendor/php-email-form/php-email-form.php';
if (!file_exists($library_path)) {
    header('HTTP/1.1 500 Server Error');
    die('Server configuration issue - please contact support');
}
require_once($library_path);

// 6. Initialize and configure
$contact = new PHP_Email_Form;
$contact->ajax = true;
$contact->to = $receiving_email_address;
$contact->from_name = htmlspecialchars(trim($_POST['name']));
$contact->from_email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$contact->subject = htmlspecialchars(trim($_POST['subject'] ?? 'New message from 1405Media website'));

// 7. Recommended SMTP configuration (Gmail) - UNCOMMENT AND FILL BELOW
/*
$contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => '1405media@gmail.com',
    'password' => 'your-gmail-app-password', // Use App Password if 2FA enabled
    'port' => '587',
    'encryption' => 'tls'
);
*/

// 8. Add message content
$contact->add_message($contact->from_name, 'From');
$contact->add_message($contact->from_email, 'Email');
$contact->add_message(htmlspecialchars(trim($_POST['message'])), 'Message');

// 9. Honeypot spam trap
if (!empty($_POST['website'])) { // Add <input type="text" name="website" class="hidden">
    header('HTTP/1.1 200 OK');
    die(); // Silent exit for bots
}

// 10. Send the email
if ($contact->send()) {
    header('HTTP/1.1 200 OK');
    echo 'Thank you! Your message has been sent.';
} else {
    header('HTTP/1.1 500 Server Error');
    echo 'Message failed to send. Please try again later.';
}