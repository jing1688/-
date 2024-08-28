document.addEventListener("DOMContentLoaded", function() {
    // Add a hover effect to the navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700'; // Gold color on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Reset to original color
        });
    });

    // Add an animation to the sections when they come into view
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add a click event to the Questions section to show/hide answers
    const questionBlocks = document.querySelectorAll('.question-block');
    questionBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const answers = block.querySelectorAll('.answer');
            answers.forEach(answer => {
                answer.classList.toggle('show');
            });
        });
    });
});

// CSS classes for animations and showing/hiding answers
const styles = `
<style>
    .slide-in {
        animation: slideIn 1s ease-out;
    }

    @keyframes slideIn {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .questions .answer {
        display: block; /* 初始状态显示答案 */
        transition: all 0.3s ease;
    }

    .questions .answer.show {
        display: none; /* 隐藏答案 */
    }
</style>
`;

document.head.insertAdjacentHTML('beforeend', styles);
