from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:4173')
        page.wait_for_timeout(2000)
        page.screenshot(path='dummy_screenshot.png')
        browser.close()

if __name__ == '__main__':
    main()