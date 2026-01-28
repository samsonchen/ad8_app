# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BBS App is a balance assessment tool implementing the Berg Balance Scale (BBS) questionnaire in Traditional Chinese. It's a React + TypeScript + Vite application that presents 14 balance test items to assess balance ability and fall risk, providing scoring with result interpretation.

## Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with TypeScript then build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

The app uses a simple screen-based navigation pattern managed by state in `App.tsx`:

```
App.tsx (state: currentScreen, score, history)
├── StartScreen - Entry point with "開始評估" button
├── QuizScreen - Iterates through 14 items with 0-4 scoring
└── ResultScreen - Shows score interpretation and localStorage history
```

**Key data flow:**
- `Screen` type: `'start' | 'quiz' | 'result'`
- Score: 0-4 points per item (5-level scale), max 56 points
- Result interpretation:
  - 41-56: Low fall risk (good balance)
  - 21-40: Medium fall risk (moderate balance)
  - 0-20: High fall risk (poor balance)
- History persists to `localStorage` under key `bbs_history`

**Data:**
- `src/data/questions.ts` - Array of 14 BBS test items in Traditional Chinese

**Components:**
- `Layout.tsx` - Wrapper with disclaimer footer
- Screen components receive callbacks to transition between screens
