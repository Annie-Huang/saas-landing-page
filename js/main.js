// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    // alert(1);
    // console.log(e.target);
    const groupHeader = e.target.closest('.faq-group-header');

    // Case when user clicks onto the .faq-group-body, groupHeader will return null;
    if (!groupHeader) return;

    console.log(groupHeader);
  });
});
