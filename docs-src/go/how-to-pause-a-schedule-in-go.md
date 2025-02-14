---
id: how-to-pause-a-schedule-in-go
title: How to pause a Schedule in Go
sidebar_label: Pause Schedule
description: To pause or unpause a Schedule in Go, use `Pause()` or `Unpause()` on the `ScheduleHandle`.
tags:
- go sdk
- code sample
- schedule
- pause
- unpause
---

<!-- DO NOT EDIT THIS FILE DIRECTLY.
THIS FILE IS GENERATED from https://github.com/temporalio/documentation-samples-go/blob/main/schedule/pause/main_dacx.go. -->

`Pause` and `Unpause` enable the start or stop of all future Workflow Runs on a given Schedule.

Pausing a Schedule halts all future Workflow Runs.
Pausing can be enabled by setting `State.Paused` to `true`, or by using `Pause()` on the ScheduleHandle.

Unpausing a Schedule allows the Workflow to execute as planned.
To unpause a Schedule, use `Unpause()` on `ScheduleHandle`.

:::copycode Sample application code

The following code sample comes from a working and tested sample application.
The code sample might be abridged within the guide to highlight key aspects.
Visit the source repository to [view the source code](https://github.com/temporalio/documentation-samples-go/blob/main/schedule/pause/main_dacx.go) in the context of the rest of the application code.

:::

```go
func main() {
// ...
	err = scheduleHandle.Pause(ctx, client.SchedulePauseOptions{
		Note: "The Schedule has been paused.",
	})
// ...
	err = scheduleHandle.Unpause(ctx, client.ScheduleUnpauseOptions{
		Note: "The Schedule has been unpaused.",
	})
```
