## An adventure awaits...

Designing your first chip can seem a bit scary, so here's how I'd suggest learning how to do so. 

The first thing I want to go over is AI usage. It's a really powerful thing, but you are not allowed to use it to generate your ASIC designs, and a reliance on doing so is only hurting your own understanding of this material.

**So let's build your fundamentals a little bit:**
- Learn how ASICs are fabricated: https://tinytapeout.com/making_asics/
- Follow the SiliWiz tutorial to understand how to build logic gates on a wafer: https://tinytapeout.com/siliwiz/introduction/
- Watch how a chip is designed from start to end. *By using the Tiny Tapeout workflow/template you'll be able to skip some of these steps, but understanding them is still important: https://www.youtube.com/watch?v=q6ytRHaTEXI

**Learn the basics of Verilog/HDLs:**
- Follow the HDLBits Verilog tutorial until you're confident in being able to approach an ASIC design, feel free to use any HDL but I like Verilog and would suggest this tutorial: https://hdlbits.01xz.net/wiki/Problem_sets#Verilog_Language

Once you've done the above, it still might feel daunting to jump into your first design, but just approach it slowly, do thorough research and seek to understand what you're doing, and you'll do amazing!!

*I would suggest using the Tiny Tapeout Verilog templates for your first design so you can bypass a lot of the manual generation steps for your physical ASIC design: https://github.com/TinyTapeout/ttgf-verilog-template and download the OSS CAD suite which contains all the tools/software for designing ASICs: https://github.com/yosyshq/oss-cad-suite-build

**Extra resources if you'd like to nerd out on this stuff like me:**
- Veritasium video on how ASML machines work: https://www.youtube.com/watch?v=MiUHjLxm3V0
- BitLuni making silly ASICs: https://www.youtube.com/watch?v=DdF_nzMW_i8
- Simulate your design on an FPGA online (Your designs need to be simulated on your own hardware for shared chip submission though): https://fpgas.online/
- IEEE Chipathon 2026 guides and info about working with GF180MCU: https://github.com/sscs-ose/sscs-chipathon-2026/tree/main/docs
- Another place to learn everything chip related: https://chipverify.com/
