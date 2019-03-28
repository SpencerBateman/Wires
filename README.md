# Wires
Wires is a project that explores digital signal processing in the browser.


# Project Architecure
There will be a central ```<Synthesizer />``` component that will govern 
audio playback and connecting to the window, audio context etc.

Should Synthesizer take care of grid? Yes but it imports the manager perhanps.
Synth needs to manage displaying direction of signal flow and order of modules.

## Directory Structure
```
wires/
├── components/
│   ├── Modules/
│   │   ├── Amp
│   │   └── Oscillator
│   ├── Synthesizer/
│   │   ├── Synthesizer
│   │   └── WAVEFORMS
│   └── UI/
│       ├── Fader
│       ├── OnSwitch
│       └── WaveSelector
├── data/
│   └── config.json
├── pages/
│   ├── index
│   └── _document
├── next.config.js
├── now.json
├── package.json
├── README.md
└── yarn.lock
```
### components/
### data/
### pages/
### next.config.js
### now.json
### package.json/
### README.md
### yarn.lock

# Modules
* Occilator
* Amp
* Filter
* EQ

# Deployment
Deploy in an instant with Now by running ```now``` in terminal.

