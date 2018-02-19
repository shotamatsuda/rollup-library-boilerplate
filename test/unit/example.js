// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import 'source-map-support/register'

import chai from 'chai'

import { add, sub, mul, div } from '../..'

const { expect } = chai

describe('example', () => {
  describe('#add', () => {
    it('works', () => {
      const a = Math.random()
      const b = Math.random()
      expect(add(a, b)).equal(a + b)
    })
  })

  describe('#sub', () => {
    it('works', () => {
      const a = Math.random()
      const b = Math.random()
      expect(sub(a, b)).equal(a - b)
    })
  })

  describe('#mul', () => {
    it('works', () => {
      const a = Math.random()
      const b = Math.random()
      expect(mul(a, b)).equal(a * b)
    })
  })

  describe('#div', () => {
    it('works', () => {
      const a = Math.random()
      const b = Math.random()
      expect(div(a, b)).equal(a / b)
    })
  })
})
