---
id: how-to-define-activity-return-values-in-python
title: How to define Activity return values in Python
sidebar_label: Activity return values
description: To return a value of the Workflow, use `return` to return an object.
tags:
- activity execution
- python sdk
- code sample
---

<!-- DO NOT EDIT THIS FILE DIRECTLY.
THIS FILE IS GENERATED from https://github.com/temporalio/documentation-samples-python/blob/main/your_app/your_activities_dacx.py. -->

An Activity Execution can return inputs and other Activity values.

The following example defines an Activity that takes a string as input and returns a string.

:::copycode Sample application code

The following code sample comes from a working and tested sample application.
The code sample might be abridged within the guide to highlight key aspects.
Visit the source repository to [view the source code](https://github.com/temporalio/documentation-samples-python/blob/main/your_app/your_activities_dacx.py) in the context of the rest of the application code.

:::

```python
# ...
@activity.defn(name="your_activity")
async def your_activity(input: YourParams) -> str:
    return f"{input.greeting}, {input.name}!"
```
