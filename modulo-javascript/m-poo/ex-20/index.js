import { Component } from "./component.js"
import { Form } from "./form.js"
import { Label } from "./label.js"
import { Input } from "./input.js"

const title = new Component('h1', 'body', {textContent: "ola mundo"})
title.render()
title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('nome:', form, {htmlFor: 'nameInput'})
const input = new Input(form, {id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildrem(input)

form.addChildrem(
    new Component('br'),
    new Label('Data de nascimento', form, {html: 'birthdayInput'}),
    new Input(form, {id:'birthdayInput', name:'birthday', type: 'date'})
)