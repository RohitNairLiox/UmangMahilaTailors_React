"use strict";

var Navbar = React.createClass({
		displayName: "Navbar",

		render: function render() {
				return React.createElement(
						"nav",
						{ className: "navbar navbar-default navbar-fixed-top" },
						React.createElement(
								"div",
								{ className: "container" },
								React.createElement(
										"div",
										{ className: "navbar-header" },
										React.createElement(
												"button",
												{ type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
												React.createElement("span", { className: "icon-bar" }),
												React.createElement("span", { className: "icon-bar" }),
												React.createElement("span", { className: "icon-bar" })
										),
										React.createElement(
												"a",
												{ className: "navbar-brand", href: "#myPage" },
												React.createElement(
														"span",
														{ id: "titleHeader" },
														"UmangMahilaTailors"
												)
										)
								),
								React.createElement(
										"div",
										{ className: "collapse navbar-collapse", id: "myNavbar" },
										React.createElement(
												"ul",
												{ className: "nav navbar-nav navbar-right" },
												React.createElement(
														"li",
														null,
														React.createElement(
																"a",
																{ href: "#about" },
																"ABOUT"
														)
												),
												React.createElement(
														"li",
														null,
														React.createElement(
																"a",
																{ href: "#services" },
																"SERVICES"
														)
												),
												React.createElement(
														"li",
														null,
														React.createElement(
																"a",
																{ href: "#portfolio" },
																"PORTFOLIO"
														)
												),
												React.createElement(
														"li",
														null,
														React.createElement(
																"a",
																{ href: "#place_order" },
																"PLACE AN ORDER"
														)
												),
												React.createElement(
														"li",
														null,
														React.createElement(
																"a",
																{ href: "#contact" },
																"CONTACT"
														)
												)
										)
								)
						)
				);
		}
});
var Content = React.createClass({
		displayName: "Content",

		render: function render() {
				return React.createElement(
						"div",
						{ className: "jumbotron text-center" },
						React.createElement("img", { src: "assets/sewing-machine.png", className: "img-circle margin", width: "350", height: "350" }),
						React.createElement(
								"h1",
								null,
								"Umang Mahila Tailors"
						),
						React.createElement(
								"p",
								null,
								"We specialize in custom tailoring"
						),
						React.createElement(
								"form",
								{ className: "form-inline", action: "http://www.umangmahilatailors.org/assets/php/subscribe.php", method: "post" },
								React.createElement("input", { type: "email", className: "form-control", name: "SubscribedEmail", id: "SubscribedEmail", size: "50", placeholder: "Email Address", required: true }),
								React.createElement(
										"button",
										{ type: "submit", className: "btn btn-danger" },
										"Subscribe"
								)
						)
				);
		}
});
var AboutUs = React.createClass({
		displayName: "AboutUs",

		render: function render() {
				return React.createElement(
						"div",
						{ id: "about", className: "container-fluid" },
						React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
										"div",
										{ className: "col-sm-8" },
										React.createElement(
												"h2",
												null,
												"About Umang Mahila"
										),
										React.createElement("br", null),
										React.createElement(
												"h4",
												null,
												"During CRH's activities in Bherampada, we made a few civil society organizations(Mahila Mandal) and strengthened many more. This lead to the formation of Umang Mahila Federation, an Apex organization of 10 mandals."
										),
										React.createElement("br", null),
										React.createElement(
												"p",
												null,
												"There are 450 women tailors in our community. They are doing the Tailoring Job works for almost all the leading brands in India. Due to the middlemen, these women are getting only mere part of the income. Which is not substaniable. So, we at CRH are trying to organize the women and empower them for better income source."
										),
										React.createElement("br", null),
										React.createElement(
												"a",
												{ href: "#contact", className: "btn btn-default btn-lg" },
												"Get in Touch"
										)
								),
								React.createElement(
										"div",
										{ className: "col-sm-4" },
										React.createElement("span", { className: "glyphicon glyphicon-scissors logo" })
								)
						)
				);
		}
});
var MissionVision = React.createClass({
		displayName: "MissionVision",

		render: function render() {
				return React.createElement(
						"div",
						{ className: "container-fluid bg-grey" },
						React.createElement(
								"div",
								{ className: "row" },
								React.createElement(
										"div",
										{ className: "col-sm-4" },
										React.createElement("span", { className: "glyphicon glyphicon-globe logo slideanim" })
								),
								React.createElement(
										"div",
										{ className: "col-sm-8" },
										React.createElement(
												"h2",
												null,
												"Our Values"
										),
										React.createElement("br", null),
										React.createElement(
												"h4",
												null,
												React.createElement(
														"strong",
														null,
														"MISSION:"
												),
												" Our mission is to create an organized skilled-worker community. Find better source of income for these women."
										),
										React.createElement("br", null),
										React.createElement(
												"p",
												null,
												React.createElement(
														"strong",
														null,
														"VISION:"
												),
												" Our vision is to create a home-based income source for the 450 women tailors of Umang Mahila Federation, Bherampada. These women have worked for many well-known brands, but end up getting paid less because of the middlemen who take away major portion of their income. We aim to create jobs for these women, so that they can earn and provide to their households, all without losing a penny to any middlemen.",
												React.createElement("br", null),
												React.createElement("br", null),
												"Umang Mahila Federation also runs a tailoring class, to give proper training to the upcoming tailors in the community. Umang Mahila Tailors plan to increase their current community level, using their present skillsets to create better income source for all."
										)
								)
						)
				);
		}
});
var ServicesOffered = React.createClass({
		displayName: "ServicesOffered",

		render: function render() {
				return React.createElement(
						"div",
						{ id: "services", className: "container-fluid text-center" },
						React.createElement(
								"h2",
								{ style: "font-size:30px;" },
								"SERVICES"
						),
						React.createElement("br", null),
						React.createElement(
								"h4",
								{ style: "font-size:26px;" },
								"Tailoring ",
								React.createElement(
										"big",
										null,
										"/"
								),
								" Alteration"
						)
				);
		}
});
var Footer = React.createClass({
		displayName: "Footer",

		render: function render() {
				return React.createElement(
						"footer",
						{ className: "container-fluid text-center" },
						React.createElement(
								"a",
								{ href: "#myPage", title: "To Top" },
								React.createElement("span", { className: "glyphicon glyphicon-chevron-up" })
						),
						React.createElement(
								"div",
								{ itemscope: true, itemtype: "http://schema.org/CreativeWork" },
								React.createElement(
										"p",
										null,
										" A ",
										React.createElement(
												"span",
												{ itemprop: "copyrightHolder" },
												"CRH Mumbai"
										),
										" Initiative. All Rights Reserved."
								),
								React.createElement(
										"p",
										null,
										"Bootstrap Theme Build By ",
										React.createElement(
												"a",
												{ href: "author/", target: "_blank", title: "About Rohit Nair", itemprop: "creator" },
												"Rohit Nair"
										)
								)
						)
				);
		}
});

ReactDOM.render(React.createElement(Navbar, null), document.getElementById('navbar'));
ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
ReactDOM.render(React.createElement(AboutUs, null), document.getElementById('aboutUs'));
ReactDOM.render(React.createElement(MissionVision, null), document.getElementById('missionVision'));
ReactDOM.render(React.createElement(ServicesOffered, null), document.getElementById('servicesOffered'));
ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));