// B''H //



// --------------------------------------------------------------------------------
export function authorsFormattedForDropdown(authors) {

    return authors.map(

        author =>
        {
            return {
                value: author.id,
                text : author.first_name + ' ' + author.last_name
            };
        }
    );
}
// --------------------------------------------------------------------------------

