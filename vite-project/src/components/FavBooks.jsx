import { useParams } from "react-router-dom";
import books from '../books.js'

export default function Favbooks() {
    const {bookId} = useParams()

    const newFavBook = books.find((book) => book.id === bookId)

    if(!newFavBook){
        return <p>{`This page doesn't contain fav Books`}</p>
    }
    return (
        <>
            <main>
                {newFavBook && (
                    <>
                    <main>
                      <p>{`Title: ${newFavBook.title}`}</p>
                      <p>{`By: ${newFavBook.author}`}</p>
                      <p>{`Year: ${newFavBook.year}`}</p>
                      <p>{`Description: ${newFavBook.description}`}</p>
                    </main>
                  </>
                )}
            </main>
        </>
    )
}