# Bubble

Experimental project for playing with [UIFeedbackGenerator](https://developer.apple.com/reference/uikit/uifeedbackgenerator) 
a new API for providing taptic feedback. Current API is actually provide only two levels of feedback, soft and hard. The soft
is provied `UISelectionFeedbackGenerator` which vibrate a little big like when scrolling. The hard is provided by 
`UIImpactFeedbackGenerator` which vibrate stronger like when you click on something.

There is another one call `UINotifyFeedbackGenerator` which accepts argument to tell which feedback you want, `SUCCESS`,
`WARNING` or `ERROR`. All three are actually using those soft and hard feedback but vibrate more than one time with different
number of vibration e.g. `SUCCESS` and `WARNING` are vibrate two time with different hard vibrate feeling. `ERROR` is vibrating
3 times with hard feeling in the middle.

When apply this feedback with touch, somehow it give the control feeling how strong it vibrate even it doesn't have that parameter,
e.g. when using `select` which provide the soft vibrate with force increase variable, the feeling of pushing down and soft
vibration cause the feeling like it vibrate stronger. Same as pulling out with `impact`.
