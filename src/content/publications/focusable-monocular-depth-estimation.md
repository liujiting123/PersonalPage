---
title: "Focusable Monocular Depth Estimation"
date: "2026-05-12"
journal: "arXiv"
external_url: "https://arxiv.org/abs/2605.11756"
image: "/PersonalPage/images/focusable.png"
description: "A region-aware monocular depth estimation framework that focuses depth modeling on target regions while preserving coherent global geometry."
tags:
  - "Depth Estimation"
  - "Spatial Perception"
  - "3D Understanding"
  - "Embodied Perception"
priority: 80
---

## Summary

This paper introduces **Focusable Monocular Depth Estimation (FDE)**, a task setting for region-aware depth prediction where the model must prioritize task-relevant target regions without losing global scene geometry.

## Method

The proposed **FocusDepth** framework conditions monocular relative depth estimation on box or text prompts. Its Multi-Scale Spatial-Aligned Fusion module aligns prompt-aware features with depth features, enabling more precise foreground depth estimation and sharper target boundaries.

## Why It Matters

The benchmark and method are especially relevant for embodied settings, where accurate depth around task-critical regions is often more important than uniform scene-level performance.

## Status

Available on arXiv.
