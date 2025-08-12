<form action="https://formspree.io/f/myzpodpv" method="POST">
  <!-- Hidden fields for better organization -->
  <input type="hidden" name="_subject" value="New message from 1405Media website">
  <input type="hidden" name="_language" value="en">
  
  <!-- Your form fields -->
  <div class="form-group">
    <input type="text" name="name" class="form-control" placeholder="Your Name" required>
  </div>
  <div class="form-group">
    <input type="email" name="_replyto" class="form-control" placeholder="Your Email" required>
  </div>
  <div class="form-group">
    <textarea name="message" class="form-control" placeholder="Your Message" rows="5" required></textarea>
  </div>
  
  <!-- Honeypot spam filter (hidden) -->
  <input type="text" name="_gotcha" style="display:none">
  
  <div class="text-center">
    <button type="submit" class="btn btn-primary">Send Message</button>
  </div>
</form>