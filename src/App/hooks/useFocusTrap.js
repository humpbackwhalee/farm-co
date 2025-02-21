import { useEffect } from 'react';

const useFocusTrap = (ref, isActive) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    // Get all focusable elements
    const getFocusableElements = () => {
      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      return Array.from(focusableElements);
    };

    // Store the element that was focused before trapping
    const previousActiveElement = document.activeElement;

    // Focus the first element when trap is activated
    const focusFirstElement = () => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length) {
        focusableElements[0].focus();
      }
    };

    const handleKeyDown = (event) => {
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If no focusable elements, do nothing
      if (!focusableElements.length) return;

      const isTabPressed = event.key === 'Tab';
      const isShiftPressed = event.shiftKey;

      // Handle tab navigation
      if (isTabPressed) {
        // Shift + Tab
        if (isShiftPressed) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        // Tab
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    // Set up the focus trap
    focusFirstElement();
    document.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement && 'focus' in previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [isActive, ref]);
};

export default useFocusTrap; 