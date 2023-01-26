import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();

const warAndPiece = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const meteora = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const theAvengers = new Movie('the Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137, 370, 1010);


test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('there must be three items in the cart', () => {
  cart.add(warAndPiece);
  cart.add(meteora);
  cart.add(theAvengers);

  expect(cart.items.length).toBe(3);
});

test('get purchase amount', () => {
  expect(cart.getAmountWithoutDiscounts()).toBe(3270)
})

test('receive discounted purchase amount', () => {
  expect(cart.getDiscountedAmount(20)).toBe(2616)
})

test('removing an item from the cart', () => {
  cart.delElement(1008)

  expect(cart.items.length).toBe(2)
})