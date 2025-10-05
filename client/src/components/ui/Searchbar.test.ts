import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"
import Searchbar from "./Searchbar"

const mockSetter = jest.fn()
const mockSetterTwo = jest.fn()
const mockSetSearchbar = jest.fn()

const requiredProps = {
  setter: mockSetter,
  setterTwo: mockSetterTwo,
  searchbar: "initial query",
  setSearchbar: mockSetSearchbar,
  placeholder: "Search products...",
  isDisabled: false,
}

test("Searchbar renders successfully by checking its placeholder text", () => {
  render(React.createElement(Searchbar, requiredProps))

  const inputElement = screen.getByPlaceholderText(requiredProps.placeholder)
  expect(inputElement).toBeInTheDocument()
})

test("Searchbar also renders successfully by checking its initial value", () => {
  render(React.createElement(Searchbar, requiredProps))

  const inputElement = screen.getByDisplayValue(requiredProps.searchbar)
  expect(inputElement).toBeInTheDocument()
})

test("input change calls setSearchbar with the new value", () => {
  const props = { ...requiredProps, searchbar: "" }
  render(React.createElement(Searchbar, props))

  const input = screen.getByPlaceholderText(props.placeholder)

  fireEvent.change(input, { target: { value: "desk" } })

  expect(mockSetSearchbar).toHaveBeenCalledTimes(1)
  expect(mockSetSearchbar).toHaveBeenCalledWith("desk")
})

test("clicking the input calls setterTwo(true)", () => {
  render(React.createElement(Searchbar, requiredProps))

  const input = screen.getByPlaceholderText(requiredProps.placeholder)

  fireEvent.click(input)

  expect(mockSetterTwo).toHaveBeenCalledTimes(1)
  expect(mockSetterTwo).toHaveBeenCalledWith(true)
})

test("pressing Enter key triggers setter and closes blur state", () => {
  const props = { ...requiredProps, searchbar: "esszimmer" }
  render(React.createElement(Searchbar, props))

  const input = screen.getByPlaceholderText(props.placeholder)

  fireEvent.keyDown(input, { key: "Enter", code: "Enter" })

  expect(mockSetter).toHaveBeenCalledTimes(1)
  expect(mockSetter).toHaveBeenCalledWith("esszimmer")

  expect(mockSetterTwo).toHaveBeenCalledTimes(1)
  expect(mockSetterTwo).toHaveBeenCalledWith(false)
})

test("clicking the clear (X) icon resets all search states", () => {
  render(React.createElement(Searchbar, requiredProps))

  const clearButton = screen.getByTestId("clear-button")

  fireEvent.click(clearButton)

  expect(mockSetter).toHaveBeenCalledWith("")

  expect(mockSetterTwo).toHaveBeenCalledWith(false)

  expect(mockSetSearchbar).toHaveBeenCalledWith("")
})
