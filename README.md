# kadmium-osc-dmx-dotnet
A lighting automation tool for live performances.

# Who is it for?
Kadmium-DMX is for bands, dancers, and entertainers who perform to music. It enables creation of synchronised lighting information to a music track, and can then play that information back at a venue, translating the data to the commands for whatever lighting fixtures are available.

# What technologies are involved?
The app is running an ASP.NET Core backend with an Angular frontend. It listens for OSC packets for control and transmits DMX over Serial Port or sACN (e1.31).
