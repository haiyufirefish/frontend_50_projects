var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var elemx = document.createElement("div");
            elemx.innerText = "this is header";
            document.body.appendChild(elemx);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var elemx = document.createElement("div");
            elemx.innerText = "this is Content";
            document.body.appendChild(elemx);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var elemx = document.createElement("div");
            elemx.innerText = "Footer";
            document.body.appendChild(elemx);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
