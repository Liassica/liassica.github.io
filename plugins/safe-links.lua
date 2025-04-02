-- Adds attributes to external links
-- The main purpose is to add nofollow, noopener and other security attributes
--
-- Example configuration:
-- [widgets.safe-external-links]
--   widget = "link-rel"
--   attributes = ["noopener", "noreferrer", "nofollow"]

Plugin.require_version("1.13")

attributes = config["attributes"]
if not attributes then
  attributes = {"nofollow", "noopener"}
end

-- Can also set targets
targets = config["targets"]
if not targets then
  targets = {"_blank"}
end

rel_extra = String.join(" ", attributes)
target = String.join (" ", targets)

links = HTML.select(page, "a")
local count = size(links)
local i = 1
while (i <= count) do
  -- Check if a URL schema is present,
  -- relative links should be left alone
  href = HTML.get_attribute(links[i], "href")
  -- Check if there's a custom rel= attribute
  rel_current = HTML.get_attribute(links[i], "rel")
  if href and Regex.match(href, "^([a-zA-Z0-9]+):") then
    -- If there's a custom rel= attribute, append to it.
    -- Otherwise, override it
    if rel_current then
      rel = rel_current .. " " .. rel_extra
    else
      rel = rel_extra
    end
    HTML.set_attribute(links[i], "rel", rel)
    -- Set target
    HTML.set_attribute(links[i], "target", target)
  end
  i = i + 1
end
