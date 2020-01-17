import React from 'react';


class BooksTable extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Image</th>
                </tr>
            </table>
        );
    }
}

export default BooksTable;