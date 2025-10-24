<!-- Contact Section -->
<section class="contact section" id="contact">
    <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
            <div class="contact-info">
                <h3>Get in Touch</h3>
                <p><i class="fas fa-map-marker-alt"></i> 123 Business Avenue, Suite 100<br>New York, NY 10001</p>
                <p><i class="fas fa-phone"></i> +1 (555) 123-4567<br>+1 (555) 987-6543</p>
                <p><i class="fas fa-envelope"></i> info@dynamicsite.com<br>support@dynamicsite.com</p>
                <p><i class="fas fa-clock"></i> Monday - Friday: 9AM - 6PM<br>Saturday: 10AM - 4PM</p>
            </div>
            <div class="contact-form">
                <?php include 'includes/form-process.php'; ?>
                
                <div class="error-messages">
                    <?php if (!empty($successMsg)): ?>
                        <div class="success-message">
                            <?php echo $successMsg; ?>
                        </div>
                    <?php endif; ?>
                </div>
                
                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>#contact">
                    <div class="form-group <?php echo !empty($nameErr) ? 'error' : ''; ?>">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" value="<?php echo $name; ?>" placeholder="Enter your name">
                        <?php if (!empty($nameErr)): ?>
                            <span class="error-message"><?php echo $nameErr; ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <div class="form-group <?php echo !empty($emailErr) ? 'error' : ''; ?>">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" name="email" value="<?php echo $email; ?>" placeholder="Enter your email">
                        <?php if (!empty($emailErr)): ?>
                            <span class="error-message"><?php echo $emailErr; ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <div class="form-group <?php echo !empty($subjectErr) ? 'error' : ''; ?>">
                        <label for="subject">Subject</label>
                        <select id="subject" name="subject">
                            <option value="">Select a subject</option>
                            <option value="General Inquiry" <?php if($subject == "General Inquiry") echo "selected"; ?>>General Inquiry</option>
                            <option value="Support" <?php if($subject == "Support") echo "selected"; ?>>Support</option>
                            <option value="Partnership" <?php if($subject == "Partnership") echo "selected"; ?>>Partnership</option>
                            <option value="Other" <?php if($subject == "Other") echo "selected"; ?>>Other</option>
                        </select>
                        <?php if (!empty($subjectErr)): ?>
                            <span class="error-message"><?php echo $subjectErr; ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <div class="form-group <?php echo !empty($messageErr) ? 'error' : ''; ?>">
                        <label for="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message"><?php echo $message; ?></textarea>
                        <?php if (!empty($messageErr)): ?>
                            <span class="error-message"><?php echo $messageErr; ?></span>
                        <?php endif; ?>
                    </div>
                    
                    <button type="submit" class="btn-submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>