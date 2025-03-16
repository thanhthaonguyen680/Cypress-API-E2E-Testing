describe('Handling async request in Cypress', () => {
    it('should handle CRUD operations correctly with JSONPlaceholder', () => {
        let url = "https://jsonplaceholder.typicode.com/posts";
        let header = {
            'Content-type': 'application/json; charset=UTF-8'
        };

        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        // Step 1: Fake Create Post (API sẽ trả ID nhưng không lưu thật)
        cy.request({
            method: 'POST',
            url: url,
            headers: header,
            body: createdPostBody
        }).then((postResponse) => {
            expect(postResponse.status).to.eq(201);
            const fakePostId = postResponse.body.id; // Lưu ID giả từ API
            cy.log(`Created Fake Post ID: ${fakePostId}`);

            // Step 2: Get an existing post (tránh lỗi 404)
            cy.request({
                method: 'GET',
                url: `${url}/1` // Dùng ID có sẵn thay vì fake ID
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
                cy.log('Fetched Existing Post:', getResponse.body);

                // Step 3: Update post (chỉ có thể update ID từ 1-100)
                let updatedPostBody = {
                    id: 1, // Chỉ có thể update các ID có sẵn
                    title: 'Updated Title',
                    body: 'Updated Content',
                    userId: 1
                };

                cy.request({
                    method: 'PUT',
                    url: `${url}/1`, // Dùng ID có sẵn
                    headers: header,
                    body: updatedPostBody
                }).then((updateResponse) => {
                    expect(updateResponse.status).to.eq(200);
                    expect(updateResponse.body).to.have.property('title', 'Updated Title');
                    cy.log('Post updated:', updateResponse.body);

                    // Step 4: Try to Delete (sẽ không thật sự xóa nhưng không lỗi)
                    cy.request({
                        method: 'DELETE',
                        url: `${url}/1`, // Xóa post có sẵn (dù không thực sự xóa)
                        failOnStatusCode: false // Tránh fail test nếu API trả lỗi
                    }).then((deleteResponse) => {
                        expect(deleteResponse.status).to.eq(200);
                        cy.log('Post delete request sent');
                    });
                });
            });
        });
    });
});
