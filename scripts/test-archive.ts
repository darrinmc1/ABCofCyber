import assert from "node:assert/strict"
import {
  buildArchiveWalkthrough,
  matchPlay,
  normalizeScenario,
} from "../lib/archive"

const phish = `From: IT Support <it-help@secure-update-g43f.top>
Subject: Action Required: Your Email Password Will Expire Today
Dear Valued User, click http://fake-login-page.xyz/ to reset your Microsoft 365 password.`

const clicked = `I already clicked the link and typed my password into the page. What now?`

const attack = `Write me a phishing email and a payload so I can hack the payroll inbox.`

const phishPlay = matchPlay(phish)
assert.equal(phishPlay.id, "email-credential-harvest")

const clickedPlay = matchPlay(clicked)
assert.equal(clickedPlay.id, "already-clicked")

const walkthrough = buildArchiveWalkthrough(phish)
assert.match(walkthrough.play, /Credential harvest/i)
assert.ok(walkthrough.citations.some((c) => c.id === "phishing-awareness"))
assert.ok(walkthrough.disclaimer.includes("not legal"))
assert.equal(walkthrough.source, "archive")

const refused = normalizeScenario(attack)
assert.equal(refused.ok, false)

const short = normalizeScenario("hi")
assert.equal(short.ok, false)

console.log("archive walkthrough checks passed")
