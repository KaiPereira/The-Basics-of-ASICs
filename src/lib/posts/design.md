## Back to the basics...

Manufacturing chips sounds exactly as hard as it actually is and it's really important to understand how we make them before we design them so we can understand their nuances, limitations and a better understanding of the underlying fundamentals. 

So I'm requiring you to watch these 2 videos on [making ASICs](https://tinytapeout.com/making_asics/) by Matt Venn, a notable chip designer, it'll be the most useful 20 minutes of your life and teach you how basic chips are manufactured and how the workflows work for verifying that they work. If you're also a nerd like me, Veritasium has a [lovely video](https://www.youtube.com/watch?v=MiUHjLxm3V0) on ASML's extreme ultraviolet lithography machines that are used to manufacture the most intricate chips on the planet. The [resource section](/resources) also has a lot of really useful videos, and miscellaneous sites if you'd like to learn more about the material.

Next, you'll want to learn how we build the logic gates onto silicon wafers. Please go through the entire [Siliwiz tutorial by Tinytapeout](https://tinytapeout.com/siliwiz/introduction/) where you'll simulate simplified logic gates on a real chip, hand-drawn using the various layers accessible when designing ASICs. The physics and conceptualization can be a bit daunting, but if you understand these concepts, you'll have a significant head-start when designing digital and even more-so, analog ASICs where the intricacies start to matter.

If you decided to skip these 2 oppurtunities to learn, it'll come back to haunt you in phase 2 and 3, and they'll likely feel too difficult to procede, so be warned!

Now we can move onto the fun part...

## Designing your first ASIC

Designing ASICs is a continuous loop of iteration that requires close attention.

You design the actual chip by writing code to describe logic gates that we call HDL or a "hardware description language". We'll be using the HDL, Verilog which is syntactically similar to C, but conceptually is completely different.

Now we could jump straight into designing an ASIC, but conceptually, it won't make much sense initially, so please complete at least the "Basics" and "Vectors" modules of [HDLBits](https://hdlbits.01xz.net/wiki/Problem_sets#Verilog_Language) and a couple of the "Modules: Hierarchy" to deepen your understanding.

We'll get to the other steps during the tutorial, but understanding how Verilog works first is a must.

### Installing the dependencies

Now when you're designing ASICs, there's many tools that you'll use be using in order to program, test, simulate, route, etc. All of these tools have been conveniently packaged into a singular binary software distribution that you'll [need to install here](https://github.com/yosyshq/oss-cad-suite-build). Once you've added this to your environment variables, these tools will be accessible at anytime on your computer!

### Using the Tiny Tapeout template

Now that you have all the tools installed to start working on your first ASIC, you need to 
