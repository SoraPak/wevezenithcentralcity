// composables/useScrollAnimation.js

import { onMounted } from 'vue';

export function useScrollAnimation(elements) {
  onMounted(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    elements.forEach((el) => {
      if (el.value) {
        observer.observe(el.value);
      }
    });
  });
}
