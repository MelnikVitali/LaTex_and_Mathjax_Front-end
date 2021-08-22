export const inputStr = `
<div class="ltx_page_main">
<div class="ltx_page_content">
<article class="ltx_document">
<div id="p1" class="ltx_para">
<p class="ltx_p ltx_align_center"><span class="ltx_text ltx_font_smallcaps" style="font-size:120%;">A Simple Sample LaTeX File</span></p>
<p class="ltx_p ltx_align_center"><span class="ltx_text ltx_font_smallcaps">Stupid Stuff I Wish Someone Had Told Me Four Years Ago</span></p>
<p class="ltx_p ltx_align_center"><span class="ltx_text ltx_font_italic">(Read the .tex file along with this or it won’t
make much sense)</span></p>
</div>
<div id="p2" class="ltx_para">
<p class="ltx_p">The first thing to realize about LaTeX is that it is not “WYSIWYG”.
In other words, it isn’t a word processor; what you type into your
.tex file is not what you’ll see in your .dvi file. For example,
LaTeX will completely ignore extra
spaces within a line of your .tex file.</p>
</div>
<div id="p3" class="ltx_para">
<p class="ltx_p">Like this. But any carriage-returns after the first two will be
completely ignored; in other words, you
can’t
add
more
space
between
</p>
</div>
<div id="p4" class="ltx_para ltx_noindent">
<p class="ltx_p">Actually there is one more way, used above; for example,
<span class="ltx_text ltx_font_smallcaps">this way</span>. The way that you get in and out of environment varies
depending on which kind of environment you want; for example, you use
<code class="ltx_verbatim ltx_font_typewriter">\\underline</code> “outside”, but <code class="ltx_verbatim ltx_font_typewriter">\\it</code> “inside”;
notice <span class="ltx_text ltx_framed_underline">this</span> versus <span class="ltx_text ltx_font_italic">this</span>.</p>
</div>
<div id="p5" class="ltx_para">
<p class="ltx_p">The real power of LaTeX (for us) is in the math environment. You
push and pop out of the math environment by typing <code class="ltx_verbatim ltx_font_typewriter">$</code>. For
example, <math id="p5.m1" class="ltx_Math" alttext="2x^{3}-1=5" display="inline"><mrow><mrow><mrow><mn>2</mn><mo>⁢</mo><msup><mi>x</mi><mn>3</mn></msup></mrow><mo>-</mo><mn>1</mn></mrow><mo>=</mo><mn>5</mn></mrow></math> is typed between dollar signs as
<code class="ltx_verbatim ltx_font_typewriter">$2x^3 - 1 = 5$</code>. Perhaps a more interesting example is
<math id="p5.m2" class="ltx_Math" alttext="\\lim_{N\\to\\infty}\\sum_{k=1}^{N}f(t_{k})\\Delta t" display="inline"><mrow><msub><mo>lim</mo><mrow><mi>N</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></msub><mo>⁡</mo><mrow><msubsup><mo largeop="true" symmetric="true">∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></msubsup><mrow><mi>f</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><msub><mi>t</mi><mi>k</mi></msub><mo stretchy="false">)</mo></mrow><mo>⁢</mo><mi mathvariant="normal">Δ</mi><mo>⁢</mo><mi>t</mi></mrow></mrow></mrow></math>.</p>
</div>
<div id="p6" class="ltx_para">
<p class="ltx_p">You can get a fancier, display-style math
environment by enclosing your equation with double dollar signs.
This will center your equation, and display sub- and super-scripts in
a more readable fashion:</p>
</div>
<div id="p7" class="ltx_para">
<table id="S0.Ex1" class="ltx_equation ltx_eqn_table">

<tr class="ltx_equation ltx_eqn_row ltx_align_baseline">
<td class="ltx_eqn_cell ltx_eqn_center_padleft"></td>
<td class="ltx_eqn_cell ltx_align_center"><math id="S0.Ex1.m1" class="ltx_Math" alttext="\\lim_{N\\to\\infty}\\sum_{k=1}^{N}f(t_{k})\\Delta t." display="block"><mrow><mrow><munder><mo movablelimits="false">lim</mo><mrow><mi>N</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mo>⁡</mo><mrow><munderover><mo largeop="true" movablelimits="false" symmetric="true">∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mrow><mi>f</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><msub><mi>t</mi><mi>k</mi></msub><mo stretchy="false">)</mo></mrow><mo>⁢</mo><mi mathvariant="normal">Δ</mi><mo>⁢</mo><mi>t</mi></mrow></mrow></mrow><mo>.</mo></mrow></math></td>
<td class="ltx_eqn_cell ltx_eqn_center_padright"></td>
</tr>
</table>
</div>
<div id="p8" class="ltx_para">
<p class="ltx_p">If you don’t want your equation to be centered, but you want the nice
indicies and all that, you can use <code class="ltx_verbatim ltx_font_typewriter">\\displaystyle</code> and get your
formula “in-line”; using our example this is
<math id="p8.m1" class="ltx_Math" alttext="\\displaystyle\\lim_{N\\to\\infty}\\sum_{k=1}^{N}f(t_{k})\\Delta t." display="inline"><mrow><mrow><munder><mo movablelimits="false">lim</mo><mrow><mi>N</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mo>⁡</mo><mrow><mstyle displaystyle="true"><munderover><mo largeop="true" movablelimits="false" symmetric="true">∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover></mstyle><mrow><mi>f</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><msub><mi>t</mi><mi>k</mi></msub><mo stretchy="false">)</mo></mrow><mo>⁢</mo><mi mathvariant="normal">Δ</mi><mo>⁢</mo><mi>t</mi></mrow></mrow></mrow><mo>.</mo></mrow></math> Of
course this can screw up your line spacing a little bit.
</p>
</div>
<div id="p9" class="ltx_para">
<p class="ltx_p">There are many more things to know about LaTeX and we can’t
possibly talk about them all here.
You can use LaTeX to get tables, commutative diagrams, figures,
aligned equations, cross-references, labels, matrices, and all manner
of strange things into your documents. You can control margins,
spacing, alignment, <span class="ltx_text ltx_font_italic">et cetera</span> to higher degrees of accuracy than
the human eye can percieve. You can waste entire days typesetting
documents to be “just so”. In short, LaTeX rules.</p>
</div>
<div id="p10" class="ltx_para">
<p class="ltx_p">The best way to learn LaTeX is by example. Get yourself a bunch
of .tex files, see what kind of output they produce, and figure out how
to modify them to do what you want. There are many template and
sample files on the department LaTeX page and in real life in the
big binder that should be in the computer lab somewhere. Good luck!</p>
</div>
</article>
</div>
<footer class="ltx_page_footer">
<div class="ltx_page_logo">Generated  on Sun Aug 22 19:31:19 2021 by <a href="http://dlmf.nist.gov/LaTeXML/">LaTeXML <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wKExQZLWTEaOUAAAAddEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIFRoZSBHSU1Q72QlbgAAAdpJREFUKM9tkL+L2nAARz9fPZNCKFapUn8kyI0e4iRHSR1Kb8ng0lJw6FYHFwv2LwhOpcWxTjeUunYqOmqd6hEoRDhtDWdA8ApRYsSUCDHNt5ul13vz4w0vWCgUnnEc975arX6ORqN3VqtVZbfbTQC4uEHANM3jSqXymFI6yWazP2KxWAXAL9zCUa1Wy2tXVxheKA9YNoR8Pt+aTqe4FVVVvz05O6MBhqUIBGk8Hn8HAOVy+T+XLJfLS4ZhTiRJgqIoVBRFIoric47jPnmeB1mW/9rr9ZpSSn3Lsmir1fJZlqWlUonKsvwWwD8ymc/nXwVBeLjf7xEKhdBut9Hr9WgmkyGEkJwsy5eHG5vN5g0AKIoCAEgkEkin0wQAfN9/cXPdheu6P33fBwB4ngcAcByHJpPJl+fn54mD3Gg0NrquXxeLRQAAwzAYj8cwTZPwPH9/sVg8PXweDAauqqr2cDjEer1GJBLBZDJBs9mE4zjwfZ85lAGg2+06hmGgXq+j3+/DsixYlgVN03a9Xu8jgCNCyIegIAgx13Vfd7vdu+FweG8YRkjXdWy329+dTgeSJD3ieZ7RNO0VAXAPwDEAO5VKndi2fWrb9jWl9Esul6PZbDY9Go1OZ7PZ9z/lyuD3OozU2wAAAABJRU5ErkJggg==" alt="[LOGO]"></a>
</div></footer>
</div>
`;

export const inputGeometry = `
<div class="ltx_page_main">
<div class="ltx_page_content">
<article class="ltx_document">
<div id="p1" class="ltx_para">
<svg id="p1.pic1" class="ltx_picture" style="width:173.8pt;height:125.9pt;" height="174.27" overflow="visible" version="1.1" viewBox="-60.03 -52.98 240.46 174.27" width="240.46"><g transform="matrix(1 0 0 -1 0 68.31)" fill="#000000" stroke="#000000" stroke-width="0.4pt" color="#000000"><g stroke-dasharray="3.0pt,3.0pt" stroke-dashoffset="0.0pt" fill="#808080" stroke="#808080"><path d="M 0 0 C 10.87 0 19.69 26.44 19.69 59.06 C 19.69 91.67 10.87 118.11 0 118.11" style="fill:none"></path></g><g stroke-width="0.6pt"><path d="M 0 0 L 157.48 39.37" style="fill:none"></path></g><g stroke-width="0.6pt"><path d="M 0 118.11 L 157.48 78.74" style="fill:none"></path></g><g stroke-width="0.6pt"><path d="M 0 0 C -10.87 0 -19.69 26.44 -19.69 59.06 C -19.69 91.67 -10.87 118.11 0 118.11" style="fill:none"></path></g><g stroke-width="0.6pt"><path d="M 157.48 59.06 M 164.02 59.06 C 164.02 69.93 161.09 78.74 157.48 78.74 C 153.87 78.74 150.94 69.93 150.94 59.06 C 150.94 48.18 153.87 39.37 157.48 39.37 C 161.09 39.37 164.02 48.18 164.02 59.06 Z M 157.48 59.06" style="fill:none"></path></g><path d="M -39.37 59.06" style="fill:none"></path><g transform="matrix(1 0 0 1 -52.65 56.34)"><g class="ltx_svg_fog" transform="matrix(1 0 0 -1 0 12.45)" fill="#000000" stroke="#000000"><switch><foreignObject width="19.2pt" height="10.1pt" y="-3.1pt" overflow="visible"><math id="p1.pic1.m1" class="ltx_Math" alttext="\\varnothing d_{1}" display="inline"><mrow><mi mathvariant="normal">∅</mi><mo>⁢</mo><msub><mi>d</mi><mn>1</mn></msub></mrow></math></foreignObject></switch></g></g><path d="M 129.92 59.06" style="fill:none"></path><g transform="matrix(1 0 0 1 116.64 56.34)"><g class="ltx_svg_fog" transform="matrix(1 0 0 -1 0 12.45)" fill="#000000" stroke="#000000"><switch><foreignObject width="19.2pt" height="10.1pt" y="-3.1pt" overflow="visible"><math id="p1.pic1.m2" class="ltx_Math" alttext="\\varnothing d_{2}" display="inline"><mrow><mi mathvariant="normal">∅</mi><mo>⁢</mo><msub><mi>d</mi><mn>2</mn></msub></mrow></math></foreignObject></switch></g></g><g stroke-width="0.6pt"><path d="M 0.62 -19.69 L 157.48 -19.69" style="fill:none"></path><g transform="matrix(-1 0 0 -1 0.62 -19.69)" stroke-dasharray="none" stroke-dashoffset="0.0pt" stroke-linecap="rect"><path d="M 0.21 -4.01 L 0.21 4.01" style="fill:none"></path></g></g><g stroke-width="0.6pt"><path d="M 158.1 -19.69 L 176.36 -19.69" style="fill:none"></path><g transform="matrix(-1 0 0 -1 158.1 -19.69)" stroke-dasharray="none" stroke-dashoffset="0.0pt" stroke-linecap="rect"><path d="M 0.21 -4.01 L 0.21 4.01" style="fill:none"></path></g></g><g transform="matrix(1 0 0 1 176.36 -19.69)" stroke-dasharray="none" stroke-dashoffset="0.0pt" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.48pt"><path d="M -1.91 2.55 C -1.75 1.59 0 0.16 0.48 0 C 0 -0.16 -1.75 -1.59 -1.91 -2.55" style="fill:none"></path></g><path d="M 0 -39.37" style="fill:none"></path><g transform="matrix(1 0 0 1 -15.57 -42.83)"><g class="ltx_svg_fog" transform="matrix(1 0 0 -1 0 12.45)" fill="#000000" stroke="#000000"><switch><foreignObject width="22.5pt" height="9.0pt" y="-2.0pt" overflow="visible"><math id="p1.pic1.m3" class="ltx_Math" alttext="x=0" display="inline"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math></foreignObject></switch></g></g><path d="M 157.48 -39.37" style="fill:none"></path><g transform="matrix(1 0 0 1 141.91 -42.83)"><g class="ltx_svg_fog" transform="matrix(1 0 0 -1 0 12.45)" fill="#000000" stroke="#000000"><switch><foreignObject width="22.5pt" height="9.0pt" y="-2.0pt" overflow="visible"><math id="p1.pic1.m4" class="ltx_Math" alttext="x=l" display="inline"><mrow><mi>x</mi><mo>=</mo><mi>l</mi></mrow></math></foreignObject></switch></g></g></g></svg>
<div class="ltx_pagination ltx_role_newpage"></div>
</div>
</article>
</div>
</div>
`;
