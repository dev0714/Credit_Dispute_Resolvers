// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('mobile-open');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = 96;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form Validation and Submission
  const form = document.getElementById('consultationForm');
  
  if (form) {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const primaryConcernSelect = document.getElementById('primaryConcern');
    const additionalDetailsTextarea = document.getElementById('additionalDetails');
    const consentCheckbox = document.getElementById('consentGiven');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Validation functions
    function validateFirstName() {
      const value = firstNameInput.value.trim();
      const errorElement = document.getElementById('firstName-error');
      
      if (value.length < 2) {
        errorElement.textContent = 'First name must be at least 2 characters';
        errorElement.classList.add('show');
        firstNameInput.classList.add('error');
        return false;
      } else {
        errorElement.classList.remove('show');
        firstNameInput.classList.remove('error');
        return true;
      }
    }
    
    function validateLastName() {
      const value = lastNameInput.value.trim();
      const errorElement = document.getElementById('lastName-error');
      
      if (value.length < 2) {
        errorElement.textContent = 'Last name must be at least 2 characters';
        errorElement.classList.add('show');
        lastNameInput.classList.add('error');
        return false;
      } else {
        errorElement.classList.remove('show');
        lastNameInput.classList.remove('error');
        return true;
      }
    }
    
    function validateEmail() {
      const value = emailInput.value.trim();
      const errorElement = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(value)) {
        errorElement.textContent = 'Please enter a valid email address';
        errorElement.classList.add('show');
        emailInput.classList.add('error');
        return false;
      } else {
        errorElement.classList.remove('show');
        emailInput.classList.remove('error');
        return true;
      }
    }
    
    function validatePhone() {
      const value = phoneInput.value.trim();
      const errorElement = document.getElementById('phone-error');
      
      if (value.length < 10) {
        errorElement.textContent = 'Please enter a valid phone number';
        errorElement.classList.add('show');
        phoneInput.classList.add('error');
        return false;
      } else {
        errorElement.classList.remove('show');
        phoneInput.classList.remove('error');
        return true;
      }
    }
    
    function validateConsent() {
      const errorElement = document.getElementById('consentGiven-error');
      
      if (!consentCheckbox.checked) {
        errorElement.textContent = 'You must provide consent to continue';
        errorElement.classList.add('show');
        return false;
      } else {
        errorElement.classList.remove('show');
        return true;
      }
    }
    
    // Add blur event listeners for real-time validation
    firstNameInput.addEventListener('blur', validateFirstName);
    lastNameInput.addEventListener('blur', validateLastName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    consentCheckbox.addEventListener('change', validateConsent);
    
    // Form submission
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Validate all fields
      const isFirstNameValid = validateFirstName();
      const isLastNameValid = validateLastName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isConsentValid = validateConsent();
      
      if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid || !isConsentValid) {
        formMessage.textContent = 'Please correct the errors above';
        formMessage.className = 'form-message error';
        return;
      }
      
      // Prepare form data
      const formData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        primaryConcern: primaryConcernSelect.value || '',
        additionalDetails: additionalDetailsTextarea.value.trim() || '',
        consentGiven: consentCheckbox.checked ? 'true' : 'false'
      };
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
      formMessage.className = 'form-message';
      
      try {
        const response = await fetch('/api/consultation-requests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          formMessage.textContent = 'Thank you for your interest! We will contact you within 24 hours to schedule your free assessment.';
          formMessage.className = 'form-message success';
          
          // Reset form
          form.reset();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Submission failed');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        formMessage.textContent = error.message || 'There was an error submitting your request. Please try again.';
        formMessage.className = 'form-message error';
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get My Free Assessment';
      }
    });
  }
});
