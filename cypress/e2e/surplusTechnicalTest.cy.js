import "cypress-plugin-api";
var testId = 1;
var prefixTc = "TC ";

describe("Surplus Technical Test GET", () => {
	it(
		prefixTc + testId++ + " : Response Basic Assertion 1 Body GET : /posts",
		() => {
			cy.api({
				method: "GET",
				url: "/posts",
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body[0].userId).to.eq(1);
				expect(response.body).to.have.length(100);
			});
		}
	);

	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Body 2 GET : /posts/{id}",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/1",
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.userId).to.eq(1);
				expect(response.body.id).to.eq(1);
				expect(response.body.title).to.include("aut");
				expect(response.body.body).to.include("quas");
			});
		}
	);

	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Body 2 Negative GET : /posts/{id}",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/1",
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.userId).to.eq(1);
				expect(response.body.id).to.eq(1);
				expect(response.body.title).to.not.include(
					"12edsaf wefadsfsafd"
				);
				expect(response.body.body).to.not.include("sad32e2das");
			});
		}
	);

	var i = 1;
	for (i = 1; i <= 3; i++) {
		it(
			prefixTc +
				testId++ +
				" : Response Basic Assertion Body 3 Looping GET : /posts/",
			() => {
				cy.api({
					method: "GET",
					url: "/posts/",
				}).then((response) => {
					expect(response.status).to.eq(200);
					expect(response.body[i - 1].id).to.eq(i);
				});
			}
		);
	}

	var i = 1;
	for (i = 1; i <= 3; i++) {
		it(
			prefixTc +
				testId++ +
				" : Response Basic Assertion Body 4 Looping GET : /posts/{id}; id = " +
				i,
			() => {
				cy.api({
					method: "GET",
					url: "/posts/" + i,
				}).then((response) => {
					expect(response.status).to.eq(200);
					expect(response.body.id).to.eq(i);
				});
			}
		);
	}

	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Body 5 Negative 404 GET : /posts/{id}",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/101",
				failOnStatusCode: false,
			}).then((response) => {
				expect(response.status).to.eq(404);
				expect(response.body).to.be.empty;
			});
		}
	);

	var j = 1;
	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Body 6 id equal to  GET : /posts/{id}; userId = 1 and 2",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/" + j,
			}).then((response_1) => {
				cy.api({
					method: "GET",
					url: "/posts/" + (j + 1),
				}).then((response_2) => {
					expect(response_1.body.userId).to.equal(
						response_2.body.userId
					);
				});
			});
		}
	);

	var i = 10;
	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Body 7 id less than GET : /posts/{id}; userId = 1",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/" + i,
			}).then((response_1) => {
				cy.api({
					method: "GET",
					url: "/posts/" + (i + 1),
				}).then((response_2) => {
					expect(response_1.body.userId).to.be.lessThan(
						response_2.body.userId
					);
				});
			});
		}
	);

	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion 8 Body GET : /posts/{id}/comments",
		() => {
			var id = 1;
			cy.api({
				method: "GET",
				url: `/posts/${id}/comments`,
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body[0].postId).to.eq(id);
				expect(response.body[0].email).to.include("Eliseo@gardner.biz");
				expect(response.body).to.have.length(5);
			});
		}
	);

	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion 9 Body GET : /posts/{id}/comments",
		() => {
			var id = 99;
			cy.api({
				method: "GET",
				url: "comments?postId=" + id,
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body[0].postId).to.eq(id);
				expect(response.body[0].email).to.include("Maxwell@adeline.me");
				expect(response.body).to.have.length(5);
			});
		}
	);
});

describe("Surplus Technical Test POST", () => {
	it(
		prefixTc +
			testId++ +
			" : Response Basic Assertion Success 10 POST : /posts",
		() => {
			cy.api({
				method: "GET",
				url: "/posts/",
			}).then((response_1) => {
				cy.api({
					method: "POST",
					url: "/posts/",
					body: {
						title: "recomendation",
						body: "motorcycle",
						userId: 12,
					},
				}).then((response_2) => {
					expect(response_2.status).to.eq(201);
					expect(response_2.body.id).to.equal(
						response_1.body.length + 1
					);
				});
			});
		}
	);
});
