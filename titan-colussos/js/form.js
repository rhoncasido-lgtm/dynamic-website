// Form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const errorMessages = [];

            // Get form fields
            const name = form.querySelector('[name="name"]');
            const email = form.querySelector('[name="email"]');
            const subject = form.querySelector('[name="subject"]');
            const message = form.querySelector('[name="message"]');

            // Validate name
            if (!name.value.trim()) {
                isValid = false;
                errorMessages.push('Name is required');
                name.classList.add('error');
            } else {
                name.classList.remove('error');
            }

            // Validate email
            if (!email.value.trim()) {
                isValid = false;
                errorMessages.push('Email is required');
                email.classList.add('error');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                errorMessages.push('Please enter a valid email address');
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }

            // Validate subject
            if (!subject.value.trim()) {
                isValid = false;
                errorMessages.push('Subject is required');
                subject.classList.add('error');
            } else {
                subject.classList.remove('error');
            }

            // Validate message
            if (!message.value.trim()) {
                isValid = false;
                errorMessages.push('Message is required');
                message.classList.add('error');
            } else {
                message.classList.remove('error');
            }

            if (isValid) {
                // Submit form
                form.submit();
            } else {
                // Show error messages
                const errorContainer = document.querySelector('.error-messages');
                if (errorContainer) {
                    errorContainer.innerHTML = errorMessages.map(msg => `<p>${msg}</p>`).join('');
                }
            }
        });
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}