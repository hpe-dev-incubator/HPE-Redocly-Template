var observer = new MutationObserver(function() {
  if (document.body) {
    // const headerElement = document.createElement('header');
    // headerElement.className = 'header';
    // headerElement.id = 'header';
    // document.body.prepend(headerElement);

    const footerElement = document.createElement('footer');
    footerElement.className = 'footer';
    footerElement.id = 'footer';
    document.body.append(footerElement);

    const ucepScript = document.createElement('script');
    ucepScript.setAttribute('src', 'https://h50007.www5.hpe.com/hfws/us/en/hpe/latest.r/root?contentType=js&switchToCHF=true&hide_country_selector=true&console_mode=true&hide_main_nav=true&hide_search=true&hide_cart=true&hide_sign_in=true&hide_help_menu=false&header_logo=hpegreenlake');
    document.head.appendChild(ucepScript);

    observer.disconnect();
  };
});
observer.observe(document.documentElement, { childList: true, subtree: true });