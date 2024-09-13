export default {
  bind(el) {
    console.log("UTM directive applied to element:", el);
    console.log("Element:", el);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const utmParams = isMobile
      ? "?utm_source=programmatic&utm_medium=display&utm_campaign=semi-tct-aws-w2425-canarias-longhaul-brd-exp&utm_content=semi-tct-aws-w2425-canarias-longhaul-mix-ia-xpa-mob-v1"
      : "?utm_source=programmatic&utm_medium=display&utm_campaign=semi-tct-aws-w2425-canarias-longhaul-brd-exp&utm_content=semi-tct-aws-w2425-canarias-longhaul-mix-ia-xpa-dsk-v1";

    if (el.tagName === "A" && el.href) {
      el.href += utmParams;
      console.log(`Updated href: ${el.href}`);
    } else {
      console.log(
        "Element is not an anchor tag or does not have an href attribute."
      );
    }
  },
};
