html >
    charset;
"utf-8" >
    http - equiv;
"x-ua-compatible";
content = "ie=edge" >
    name;
"viewport";
content = "width=device-width, initial-scale=1" >
    --bootstrap;
css-- >
    href;
"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css";
rel = "stylesheet" /  >
    --Load;
the;
AJAX;
API-- >
    type;
"text/javascript";
src = "https://www.gstatic.com/charts/loader.js" > /script>
    < script >
;
// !important: You want to give this variable(var googleLoaded = false;). This is used to run multiple chart in your jade.
var googleLoaded = false;
// !important: Define which chart packages to preload.Because this package uses ChartWrappers you can use any chart type that Google supports, but if it // isn't loaded it will load it on demand.
var googleChartsPackagesToLoad = ['geochart'];
/script>
    < title > ;
htmlWebpackPlugin.options.title %  > /title>
    < meta;
name = "description";
content = "<%= htmlWebpackPlugin.options.metadata.description %>" >
    --base;
url-- >
    href;
"<%= htmlWebpackPlugin.options.metadata.baseUrl %>" >
     % ;
if (webpackConfig.htmlElements.headTags) {
     %  >
        --Configured;
    Head;
    Tags-- >
    ;
    webpackConfig.htmlElements.headTags %  >
         % ;
}
 %  >
;
htmlWebpackPlugin.files.webpackManifest %  >
     % ;
if (htmlWebpackPlugin.options.metadata.isDevServer && htmlWebpackPlugin.options.metadata.HMR !== true) {
     %  >
        --Webpack;
    Dev;
    Server;
    reload-- >
        src;
    "/webpack-dev-server.js" > /script>
        <  % ;
}
 %  >
    --Async;
Google;
Tag;
Manager: change;
gtmKey;
value;
inside;
config.prod.conf;
to;
your;
to;
be;
your;
site;
's ID-->
    <  % ;
if (htmlWebpackPlugin.options.gtmKey) {
     %  >
        --Google;
    Tag;
    Manager-- >
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '<%= htmlWebpackPlugin.options.gtmKey %>');
    /script>
        < !--End;
    Google;
    Tag;
    Manager-- >
         % ;
}
 %  >
    --End;
Google;
Analytics-- >
    --CSS;
will;
be;
injected;
by;
webpack;
here-- >
    --Preload;
link;
tags;
will;
be;
injected;
by;
webpack;
here-- >
    /head>
    < body >
     % ;
if (htmlWebpackPlugin.options.gtmKey) {
     %  >
        --Google;
    Tag;
    Manager(noscript)-- >
        src;
    "https://www.googletagmanager.com/ns.html?id=<%= htmlWebpackPlugin.options.gtmKey %>";
    height = "0";
    width = "0";
    style = "display:none;visibility:hidden" > /iframe></noscript >
        --End;
    Google;
    Tag;
    Manager(noscript)-- >
         % ;
}
 %  >
    Loading;
/app>
    < !--Scripts;
will;
be;
injected;
by;
webpack;
here-- >
    /body>
    < /html>;
