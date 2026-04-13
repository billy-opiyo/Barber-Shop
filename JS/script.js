;(function () {
	// Mobile menu toggle
	const toggleBtn = document.getElementById("menuToggle")
	const navLinks = document.getElementById("navLinks")
	if (toggleBtn) {
		toggleBtn.addEventListener("click", () => {
			if (navLinks.style.display === "flex") {
				navLinks.style.display = "none"
			} else {
				navLinks.style.display = "flex"
				navLinks.style.flexDirection = "column"
				navLinks.style.position = "absolute"
				navLinks.style.top = "80px"
				navLinks.style.left = "0"
				navLinks.style.width = "100%"
				navLinks.style.background = "#fdf7f0"
				navLinks.style.padding = "20px"
				navLinks.style.boxShadow = "0 20px 20px rgba(0,0,0,0.05)"
			}
		})
	}

	// Dark mode toggle
	const darkModeToggle = document.getElementById("darkModeToggle")
	if (darkModeToggle) {
		// Check for saved theme preference or default to light mode
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme === "dark") {
			document.body.classList.add("dark-mode")
			darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
		}

		darkModeToggle.addEventListener("click", () => {
			document.body.classList.toggle("dark-mode")
			
			if (document.body.classList.contains("dark-mode")) {
				darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'
				localStorage.setItem("theme", "dark")
			} else {
				darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'
				localStorage.setItem("theme", "light")
			}
		})
	}

	// Set min date for booking
	const today = new Date().toISOString().split("T")[0]
	const dateInput = document.getElementById("bookingDate")
	if (dateInput) dateInput.min = today

// Booking form simulation + Google Calendar link generator
	const form = document.getElementById("appointmentForm")
	const feedbackDiv = document.getElementById("bookingFeedback")
	const feedbackMsg = document.getElementById("feedbackMsg")
	const gcalLink = document.getElementById("gCalLink")

	// Add null checks to prevent errors if elements don't exist
	if (form && feedbackDiv && feedbackMsg && gcalLink) {
		form.addEventListener("submit", function (e) {
			e.preventDefault()

			// gather data for demo
			const name = document.getElementById("clientName").value || "Client"
			const serviceSelect = document.getElementById("serviceSelect")
			const service = serviceSelect.options[serviceSelect.selectedIndex].value
			const stylistSelect = document.getElementById("stylistSelect")
			const stylist = stylistSelect.options[stylistSelect.selectedIndex].value
			const dateVal = dateInput.value
			const timeSelect = document.getElementById("timeSelect")
			const timeVal = timeSelect.options[timeSelect.selectedIndex].text

			if (!dateVal) {
				alert("Please choose a date")
				return
			}

			// build feedback
			feedbackMsg.innerText = `🎉 Thanks ${name}! Your ${service} with ${stylist} on ${dateVal} at ${timeVal} is confirmed (demo).`
			feedbackDiv.style.display = "block"

			// generate Google Calendar link
			if (dateVal && timeVal) {
				const startDateTime = `${dateVal}T${convertTimeTo24(timeVal)}:00`
				const endDateTime = `${dateVal}T${addHour(convertTimeTo24(timeVal))}:00`
				const title = encodeURIComponent(`LUXE: ${service} with ${stylist}`)
				const details = encodeURIComponent(`Appointment at LUXE BARBER Nairobi.`)
				const location = encodeURIComponent("Westlands, Nairobi")
				const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime.replace(/[-:]/g, "")}/${endDateTime.replace(/[-:]/g, "")}&details=${details}&location=${location}`
				gcalLink.href = gcalUrl
			}

			// scroll to feedback
			feedbackDiv.scrollIntoView({ behavior: "smooth", block: "nearest" })
		})
	}

	function convertTimeTo24(timeStr) {
		const [time, mod] = timeStr.split(" ")
		let [hours, minutes] = time.split(":")
		// Ensure minutes exist, default to "00" if not
		if (!minutes) minutes = "00"
		if (mod === "PM" && hours !== "12") hours = String(Number(hours) + 12)
		if (mod === "AM" && hours === "12") hours = "00"
		return `${hours.padStart(2, "0")}:${minutes}`
	}
	function addHour(time24) {
		let [h, m] = time24.split(":").map(Number)
		h = (h + 1) % 24
		return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
	}

	// smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			const href = this.getAttribute("href")
			if (href === "#" || href === "") return
			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				target.scrollIntoView({ behavior: "smooth" })
				// close mobile menu if open
				if (window.innerWidth <= 900) navLinks.style.display = "none"
			}
		})
	})

	// newsletter dummy
	const newsletterBtn = document.querySelector(".newsletter-form .btn")
	const newsletterInput = document.querySelector(".newsletter-form input")
	if (newsletterBtn && newsletterInput) {
		newsletterBtn.addEventListener("click", (e) => {
			e.preventDefault()
			if (newsletterInput.value) alert("✨ Thanks for subscribing! (demo)")
			else alert("Enter your email")
		})
	}

	// =========================================
	// SCROLL ANIMATIONS - INTERSECTION OBSERVER
	// =========================================
	const initScrollAnimations = () => {
		// Add animation classes to elements
		const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card, .blog-card, .section-title, .booking-wrapper, .hours-box, .newsletter')
		
		animatedElements.forEach((el, index) => {
			el.classList.add('animate-on-scroll')
			el.classList.add(`stagger-${(index % 6) + 1}`)
		})

		// Create observer
		const observerOptions = {
			root: null,
			rootMargin: '0px 0px -100px 0px',
			threshold: 0.1
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					observer.unobserve(entry.target)
				}
			})
		}, observerOptions)

		// Observe all animated elements
		animatedElements.forEach(el => observer.observe(el))
	}

	// Navbar scroll effect
	const initNavbarScroll = () => {
		const navbar = document.querySelector('.navbar')
		
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				navbar.classList.add('scrolled')
			} else {
				navbar.classList.remove('scrolled')
			}
		})
	}

	// Booking success animation
	if (feedbackDiv) {
		const originalSubmit = form.onsubmit
		form.addEventListener('submit', () => {
			setTimeout(() => {
				feedbackDiv.classList.add('show')
			}, 100)
		})
	}

	// Initialize animations when DOM is ready
	document.addEventListener('DOMContentLoaded', () => {
		initScrollAnimations()
		initNavbarScroll()
	})

	// Initialize immediately if already loaded
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		initScrollAnimations()
		initNavbarScroll()
	}

})()
