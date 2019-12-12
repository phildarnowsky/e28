## P3 Peer Review

+ Reviewer's name: Phil Darnowsky
+ Reviwee's name: Jiajia Chen
+ URL to reviewee's Github repo: *https://github.com/audreychenjj-2019/e28*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
I was able to produce just one error. Go to the "Portfolio" page and click
"Add". In the symbol field, enter a string that's not the symbol of any stock,
for instance "FOOBAR". Hit Enter, and in the console, you get:

```
TypeError: Cannot read property 'symbol' of undefined
    at onKeyDownEnter (AutoComplete.vue:123)
```

This could presumably be fixed with a quick check at the head of
`onKeyDownEnter`.

### Were there any parts of the interface that you found confusing or unclear?
In the portfolio page, when you click "Add", it would be nice if the first
input field (in the "Symbol" column) got input focus.

When adding or editing data in the Portfolio, I would have put a validation
on the numeric fields ("# Shares" and "$ Cost/Share") to ensure non-negative
values.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

I discuss some things I found unclear or hard to follow below. However, my
preference, when it comes to code that isn't self-evident, is not to comment on
it, but rather to refactor the code so it becomes more self-evident.

### Are there any parts of the code that you found interesting or taught you something new?

I like how you encapsulated access to the `localStorage` in a class that hid the
implementation details behind a neat interface. Overall I found your division of
the project into components to be well thought out: they exhibit high coherence
and low coupling, which is what we want.

### Are there any best practices discussed in course material that you feel were not addressed in the code?
Extracting some methods could clarify your templates a greate deal. For
instance, consider `TopQuotes.vue`, lines 25 through 48. Right now that section
reads:

```
<div class="Cell">
	<p
		v-bind:class="[
			stock.changes > 0 ? 'increase' : 'decrease',
			'numbers'
		]"
	>
		{{ stock.price }}
	</p>
</div>
<div class="Cell">
	<p
		v-bind:class="[
			stock.changes > 0 ? 'positive' : 'negative',
			'numbers'
		]"
	>
		{{
			(
				(100 * stock.changes) /
				(stock.changes + parseFloat(stock.price))
			).toFixed(2)
		}}%
	</p>
</div>
```

The markup gets buried, visually, by all the logic. But by extracting
appropriate methods this could read:

```
<div class="Cell">
	<p v-bind:class="changeClass(stock)">
		{{ stock.price }}
	</p>
</div>
<div class="Cell">
	<p v-bind:class="changeClass(stock)">
    {{ changePercent(stock) }}%
	</p>
</div>
```

The structure of the document is now much clearer.

### Do you have any additional comments not covered in the above questions?
When naming event callbacks, name them for what they do, not what event they are
connected to. For example, in `AutoComplete.vue`, instead of giving the name
`onArrowDown` to the callback bound to `keydown.down`, perhaps call it
`increaseArrowCount`. This leads to more self-documenting code.

You have much more inline CSS in your templates than I am comfortable with.

As a general rule, where possible, use `const` instead of `let`. This does a
couple of important things. `const foo` indicates to the reader of your code
that `foo` should never change once set. It indicates the same thing to the JS
interpreter, meaning the interpreter will catch erroneous attempts to mutate
the value of `foo`. It also might serve as a hint to the interpreter that
there's an optimization opportunity by way of inlining the value of `foo`.

Overall this is a nice piece of work. Well done!
