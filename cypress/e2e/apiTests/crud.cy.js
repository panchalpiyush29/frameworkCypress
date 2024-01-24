describe('Learning API testing', () => {


    it('Get test', () => {
        cy.request('GET', 'users?page=2').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal('Lindsay')
        })
    })

    it('Post test', () => {
        const user = {
            "name": "Piyush",
            "job": "automation tester"
        };
        cy.request('POST', 'users', user).then((response) => {
            cy.log(response.body)
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('Put test', () => {

        const user = {
            "name": "Piyush",
            "job": "automation tester lead"
        };
        cy.request('PUT', 'users/2', user).then((response) => {
            cy.log(response.body)
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('Delete test', () => {
        cy.request('DELETE', 'users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })
})