// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    // alert(1);
    // console.log(e.target);
    const groupHeader = e.target.closest('.faq-group-header');

    // Case when user clicks onto the .faq-group-body, groupHeader will return null;
    if (!groupHeader) return;

    // console.log(groupHeader);

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
});
