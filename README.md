# Wires
Wires is a project that explores digital signal processing.


# Project Architecure
There will be a central ```<Synthesizer />``` component that will govern 
audio playback and connecting to the window, audio context etc.

Should Synthesizer take care of grid? Yes but it imports the manager perhanps.
Synth needs to manage displaying direction of signal flow and order of modules.

# Modules
* Occilator
* Amp
* Filter
* EQ

```
wires/
├── components/
│   ├── Modules/
│   │   ├── Oscillator
│   │   ├── Filter
│   │   ├── EQ
│   │   └── Amp
│   ├── Synthesizer/
│   │   ├── Synthesizer
│   │   └── WAVEFORMS
│   └── UI/
│       ├── Fader
│       └── WaveSelector
├── pages/
├── next.config.js
├── now.json
└── package.json
```
