Checking for correctness
========================

Does the calculator give the correct answer? This can be checked either using your own knowledge or by checking with other calculators on the web (e.g., the example calculator listed in Mastermind). Note that the Calculatorian should have done this as part of the checklist, but it is a very important element of a calculator to get right.

Does the calculator function correctly when various inputs are entered? As well as entering reasonable real-life values, also try boundary conditions such as zeros, negative values, and non-integer values. Does the engine hang (e.g., a value disappears when moving to another input)? Do any infinities or NaNs appear? If so, this may indicate that further conditions are required, or there is a bug in customJS code, etc.

CustomJS
--------

You **should not review customJS code** (this is not a code review). Your focus should be on whether the end result the user sees is correct. As part of the checklist, Calculatorians are asked to avoid any red ESLint errors, so that will catch most simple issues. If buggy code is causing the calculator to give wrong answers, then point these cases out to the author and ask them to fix the code to correct it.

If the author can't find the bug in their code, then please ask them to **seek help** from their Power Team, the Calculatorians Slack channel, or someone more familiar with JavaScript (e.g., Dominik, Steve, Alvaro).

Text
----

Make sure the text is factually correct, based on your knowledge of the subject. If you are unsure about something, ask the author to double-check it.
