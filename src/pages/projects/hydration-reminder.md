---
title: "hydration reminder"
date: 2025-06-15
description: "GNOME shell extension reminder to stay hydrated."
technologies: ["javascript"]
links:
  - label: "github"
    url: "https://github.com/daxog/hydration-reminder"
  - label: "extension"
    url: "https://extensions.gnome.org/extension/8244/hydration-reminder"
layout: "../../layouts/ProjectLayout.astro"
---

A GNOME shell extension that notifies users to take a break and stay hydrated. I often forget to drink enough water, so this prods me to get up and hydrate. The initial idea and implementation was a timer-triggered oneshot service - [wamind](https://github.com/daxog/wamind), but the reminder lacked a user interface. Given I was already using GNOME, building a shell extension felt like the most straightforward approach. And it turned out to be fairly interesting, learning and working with the GNOME shell and GNOME JavaScript.

![popup image](../../../public/popup_hr.png)

Consists of a popup with a start/stop toggle button and a preferences button.

![prefs image](../../../public/prefs_hr.png)

Users can adjust the reminder interval in the preferences window, with a minimum of 1 and a maximum of 180 minutes. When the extension's enabled, desktop notifications are triggered through a GLib timer at the configured interval.

*Deserves got nothin' to do with it.*
