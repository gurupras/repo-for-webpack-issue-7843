'use strict'
const data = {
  name: 'octicons',
  async loadIcon (name) {
    switch (name) {
      case 'alert': return import(/* webpackChunkName:"octicons/alert" */ './js/alert.json')
      case 'archive': return import(/* webpackChunkName:"octicons/archive" */ './js/archive.json')
      case 'arrow-both': return import(/* webpackChunkName:"octicons/arrow-both" */ './js/arrow-both.json')
      case 'arrow-down': return import(/* webpackChunkName:"octicons/arrow-down" */ './js/arrow-down.json')
      case 'arrow-left': return import(/* webpackChunkName:"octicons/arrow-left" */ './js/arrow-left.json')
      case 'arrow-right': return import(/* webpackChunkName:"octicons/arrow-right" */ './js/arrow-right.json')
      case 'arrow-small-down': return import(/* webpackChunkName:"octicons/arrow-small-down" */ './js/arrow-small-down.json')
      case 'arrow-small-left': return import(/* webpackChunkName:"octicons/arrow-small-left" */ './js/arrow-small-left.json')
      case 'arrow-small-right': return import(/* webpackChunkName:"octicons/arrow-small-right" */ './js/arrow-small-right.json')
      case 'arrow-small-up': return import(/* webpackChunkName:"octicons/arrow-small-up" */ './js/arrow-small-up.json')
      case 'arrow-up': return import(/* webpackChunkName:"octicons/arrow-up" */ './js/arrow-up.json')
      case 'beaker': return import(/* webpackChunkName:"octicons/beaker" */ './js/beaker.json')
      case 'bell': return import(/* webpackChunkName:"octicons/bell" */ './js/bell.json')
      case 'bold': return import(/* webpackChunkName:"octicons/bold" */ './js/bold.json')
      case 'book': return import(/* webpackChunkName:"octicons/book" */ './js/book.json')
      case 'bookmark': return import(/* webpackChunkName:"octicons/bookmark" */ './js/bookmark.json')
      case 'briefcase': return import(/* webpackChunkName:"octicons/briefcase" */ './js/briefcase.json')
      case 'broadcast': return import(/* webpackChunkName:"octicons/broadcast" */ './js/broadcast.json')
      case 'browser': return import(/* webpackChunkName:"octicons/browser" */ './js/browser.json')
      case 'bug': return import(/* webpackChunkName:"octicons/bug" */ './js/bug.json')
      case 'calendar': return import(/* webpackChunkName:"octicons/calendar" */ './js/calendar.json')
      case 'check': return import(/* webpackChunkName:"octicons/check" */ './js/check.json')
      case 'checklist': return import(/* webpackChunkName:"octicons/checklist" */ './js/checklist.json')
      case 'chevron-down': return import(/* webpackChunkName:"octicons/chevron-down" */ './js/chevron-down.json')
      case 'chevron-left': return import(/* webpackChunkName:"octicons/chevron-left" */ './js/chevron-left.json')
      case 'chevron-right': return import(/* webpackChunkName:"octicons/chevron-right" */ './js/chevron-right.json')
      case 'chevron-up': return import(/* webpackChunkName:"octicons/chevron-up" */ './js/chevron-up.json')
      case 'circle-slash': return import(/* webpackChunkName:"octicons/circle-slash" */ './js/circle-slash.json')
      case 'circuit-board': return import(/* webpackChunkName:"octicons/circuit-board" */ './js/circuit-board.json')
      case 'clippy': return import(/* webpackChunkName:"octicons/clippy" */ './js/clippy.json')
      case 'clock': return import(/* webpackChunkName:"octicons/clock" */ './js/clock.json')
      case 'cloud-download': return import(/* webpackChunkName:"octicons/cloud-download" */ './js/cloud-download.json')
      case 'cloud-upload': return import(/* webpackChunkName:"octicons/cloud-upload" */ './js/cloud-upload.json')
      case 'code': return import(/* webpackChunkName:"octicons/code" */ './js/code.json')
      case 'comment-discussion': return import(/* webpackChunkName:"octicons/comment-discussion" */ './js/comment-discussion.json')
      case 'comment': return import(/* webpackChunkName:"octicons/comment" */ './js/comment.json')
      case 'credit-card': return import(/* webpackChunkName:"octicons/credit-card" */ './js/credit-card.json')
      case 'dash': return import(/* webpackChunkName:"octicons/dash" */ './js/dash.json')
      case 'dashboard': return import(/* webpackChunkName:"octicons/dashboard" */ './js/dashboard.json')
      case 'database': return import(/* webpackChunkName:"octicons/database" */ './js/database.json')
      case 'desktop-download': return import(/* webpackChunkName:"octicons/desktop-download" */ './js/desktop-download.json')
      case 'device-camera-video': return import(/* webpackChunkName:"octicons/device-camera-video" */ './js/device-camera-video.json')
      case 'device-camera': return import(/* webpackChunkName:"octicons/device-camera" */ './js/device-camera.json')
      case 'device-desktop': return import(/* webpackChunkName:"octicons/device-desktop" */ './js/device-desktop.json')
      case 'device-mobile': return import(/* webpackChunkName:"octicons/device-mobile" */ './js/device-mobile.json')
      case 'diff-added': return import(/* webpackChunkName:"octicons/diff-added" */ './js/diff-added.json')
      case 'diff-ignored': return import(/* webpackChunkName:"octicons/diff-ignored" */ './js/diff-ignored.json')
      case 'diff-modified': return import(/* webpackChunkName:"octicons/diff-modified" */ './js/diff-modified.json')
      case 'diff-removed': return import(/* webpackChunkName:"octicons/diff-removed" */ './js/diff-removed.json')
      case 'diff-renamed': return import(/* webpackChunkName:"octicons/diff-renamed" */ './js/diff-renamed.json')
      case 'diff': return import(/* webpackChunkName:"octicons/diff" */ './js/diff.json')
      case 'ellipsis': return import(/* webpackChunkName:"octicons/ellipsis" */ './js/ellipsis.json')
      case 'eye-closed': return import(/* webpackChunkName:"octicons/eye-closed" */ './js/eye-closed.json')
      case 'eye': return import(/* webpackChunkName:"octicons/eye" */ './js/eye.json')
      case 'file-binary': return import(/* webpackChunkName:"octicons/file-binary" */ './js/file-binary.json')
      case 'file-code': return import(/* webpackChunkName:"octicons/file-code" */ './js/file-code.json')
      case 'file-directory': return import(/* webpackChunkName:"octicons/file-directory" */ './js/file-directory.json')
      case 'file-media': return import(/* webpackChunkName:"octicons/file-media" */ './js/file-media.json')
      case 'file-pdf': return import(/* webpackChunkName:"octicons/file-pdf" */ './js/file-pdf.json')
      case 'file-submodule': return import(/* webpackChunkName:"octicons/file-submodule" */ './js/file-submodule.json')
      case 'file-symlink-directory': return import(/* webpackChunkName:"octicons/file-symlink-directory" */ './js/file-symlink-directory.json')
      case 'file-symlink-file': return import(/* webpackChunkName:"octicons/file-symlink-file" */ './js/file-symlink-file.json')
      case 'file-zip': return import(/* webpackChunkName:"octicons/file-zip" */ './js/file-zip.json')
      case 'file': return import(/* webpackChunkName:"octicons/file" */ './js/file.json')
      case 'flame': return import(/* webpackChunkName:"octicons/flame" */ './js/flame.json')
      case 'fold': return import(/* webpackChunkName:"octicons/fold" */ './js/fold.json')
      case 'gear': return import(/* webpackChunkName:"octicons/gear" */ './js/gear.json')
      case 'gift': return import(/* webpackChunkName:"octicons/gift" */ './js/gift.json')
      case 'gist-secret': return import(/* webpackChunkName:"octicons/gist-secret" */ './js/gist-secret.json')
      case 'gist': return import(/* webpackChunkName:"octicons/gist" */ './js/gist.json')
      case 'git-branch': return import(/* webpackChunkName:"octicons/git-branch" */ './js/git-branch.json')
      case 'git-commit': return import(/* webpackChunkName:"octicons/git-commit" */ './js/git-commit.json')
      case 'git-compare': return import(/* webpackChunkName:"octicons/git-compare" */ './js/git-compare.json')
      case 'git-merge': return import(/* webpackChunkName:"octicons/git-merge" */ './js/git-merge.json')
      case 'git-pull-request': return import(/* webpackChunkName:"octicons/git-pull-request" */ './js/git-pull-request.json')
      case 'github-action': return import(/* webpackChunkName:"octicons/github-action" */ './js/github-action.json')
      case 'globe': return import(/* webpackChunkName:"octicons/globe" */ './js/globe.json')
      case 'grabber': return import(/* webpackChunkName:"octicons/grabber" */ './js/grabber.json')
      case 'graph': return import(/* webpackChunkName:"octicons/graph" */ './js/graph.json')
      case 'heart': return import(/* webpackChunkName:"octicons/heart" */ './js/heart.json')
      case 'history': return import(/* webpackChunkName:"octicons/history" */ './js/history.json')
      case 'home': return import(/* webpackChunkName:"octicons/home" */ './js/home.json')
      case 'horizontal-rule': return import(/* webpackChunkName:"octicons/horizontal-rule" */ './js/horizontal-rule.json')
      case 'hubot': return import(/* webpackChunkName:"octicons/hubot" */ './js/hubot.json')
      case 'inbox': return import(/* webpackChunkName:"octicons/inbox" */ './js/inbox.json')
      case 'info': return import(/* webpackChunkName:"octicons/info" */ './js/info.json')
      case 'issue-closed': return import(/* webpackChunkName:"octicons/issue-closed" */ './js/issue-closed.json')
      case 'issue-opened': return import(/* webpackChunkName:"octicons/issue-opened" */ './js/issue-opened.json')
      case 'issue-reopened': return import(/* webpackChunkName:"octicons/issue-reopened" */ './js/issue-reopened.json')
      case 'italic': return import(/* webpackChunkName:"octicons/italic" */ './js/italic.json')
      case 'jersey': return import(/* webpackChunkName:"octicons/jersey" */ './js/jersey.json')
      case 'kebab-horizontal': return import(/* webpackChunkName:"octicons/kebab-horizontal" */ './js/kebab-horizontal.json')
      case 'kebab-vertical': return import(/* webpackChunkName:"octicons/kebab-vertical" */ './js/kebab-vertical.json')
      case 'key': return import(/* webpackChunkName:"octicons/key" */ './js/key.json')
      case 'keyboard': return import(/* webpackChunkName:"octicons/keyboard" */ './js/keyboard.json')
      case 'law': return import(/* webpackChunkName:"octicons/law" */ './js/law.json')
      case 'light-bulb': return import(/* webpackChunkName:"octicons/light-bulb" */ './js/light-bulb.json')
      case 'link-external': return import(/* webpackChunkName:"octicons/link-external" */ './js/link-external.json')
      case 'link': return import(/* webpackChunkName:"octicons/link" */ './js/link.json')
      case 'list-ordered': return import(/* webpackChunkName:"octicons/list-ordered" */ './js/list-ordered.json')
      case 'list-unordered': return import(/* webpackChunkName:"octicons/list-unordered" */ './js/list-unordered.json')
      case 'location': return import(/* webpackChunkName:"octicons/location" */ './js/location.json')
      case 'lock': return import(/* webpackChunkName:"octicons/lock" */ './js/lock.json')
      case 'logo-gist': return import(/* webpackChunkName:"octicons/logo-gist" */ './js/logo-gist.json')
      case 'logo-github': return import(/* webpackChunkName:"octicons/logo-github" */ './js/logo-github.json')
      case 'mail-read': return import(/* webpackChunkName:"octicons/mail-read" */ './js/mail-read.json')
      case 'mail': return import(/* webpackChunkName:"octicons/mail" */ './js/mail.json')
      case 'mark-github': return import(/* webpackChunkName:"octicons/mark-github" */ './js/mark-github.json')
      case 'markdown': return import(/* webpackChunkName:"octicons/markdown" */ './js/markdown.json')
      case 'megaphone': return import(/* webpackChunkName:"octicons/megaphone" */ './js/megaphone.json')
      case 'mention': return import(/* webpackChunkName:"octicons/mention" */ './js/mention.json')
      case 'milestone': return import(/* webpackChunkName:"octicons/milestone" */ './js/milestone.json')
      case 'mirror': return import(/* webpackChunkName:"octicons/mirror" */ './js/mirror.json')
      case 'mortar-board': return import(/* webpackChunkName:"octicons/mortar-board" */ './js/mortar-board.json')
      case 'mute': return import(/* webpackChunkName:"octicons/mute" */ './js/mute.json')
      case 'no-newline': return import(/* webpackChunkName:"octicons/no-newline" */ './js/no-newline.json')
      case 'note': return import(/* webpackChunkName:"octicons/note" */ './js/note.json')
      case 'octoface': return import(/* webpackChunkName:"octicons/octoface" */ './js/octoface.json')
      case 'organization': return import(/* webpackChunkName:"octicons/organization" */ './js/organization.json')
      case 'package': return import(/* webpackChunkName:"octicons/package" */ './js/package.json')
      case 'paintcan': return import(/* webpackChunkName:"octicons/paintcan" */ './js/paintcan.json')
      case 'pencil': return import(/* webpackChunkName:"octicons/pencil" */ './js/pencil.json')
      case 'person': return import(/* webpackChunkName:"octicons/person" */ './js/person.json')
      case 'pin': return import(/* webpackChunkName:"octicons/pin" */ './js/pin.json')
      case 'play': return import(/* webpackChunkName:"octicons/play" */ './js/play.json')
      case 'plug': return import(/* webpackChunkName:"octicons/plug" */ './js/plug.json')
      case 'plus-small': return import(/* webpackChunkName:"octicons/plus-small" */ './js/plus-small.json')
      case 'plus': return import(/* webpackChunkName:"octicons/plus" */ './js/plus.json')
      case 'primitive-dot': return import(/* webpackChunkName:"octicons/primitive-dot" */ './js/primitive-dot.json')
      case 'primitive-square': return import(/* webpackChunkName:"octicons/primitive-square" */ './js/primitive-square.json')
      case 'project': return import(/* webpackChunkName:"octicons/project" */ './js/project.json')
      case 'pulse': return import(/* webpackChunkName:"octicons/pulse" */ './js/pulse.json')
      case 'question': return import(/* webpackChunkName:"octicons/question" */ './js/question.json')
      case 'quote': return import(/* webpackChunkName:"octicons/quote" */ './js/quote.json')
      case 'radio-tower': return import(/* webpackChunkName:"octicons/radio-tower" */ './js/radio-tower.json')
      case 'reply': return import(/* webpackChunkName:"octicons/reply" */ './js/reply.json')
      case 'repo-clone': return import(/* webpackChunkName:"octicons/repo-clone" */ './js/repo-clone.json')
      case 'repo-force-push': return import(/* webpackChunkName:"octicons/repo-force-push" */ './js/repo-force-push.json')
      case 'repo-forked': return import(/* webpackChunkName:"octicons/repo-forked" */ './js/repo-forked.json')
      case 'repo-pull': return import(/* webpackChunkName:"octicons/repo-pull" */ './js/repo-pull.json')
      case 'repo-push': return import(/* webpackChunkName:"octicons/repo-push" */ './js/repo-push.json')
      case 'repo': return import(/* webpackChunkName:"octicons/repo" */ './js/repo.json')
      case 'report': return import(/* webpackChunkName:"octicons/report" */ './js/report.json')
      case 'rocket': return import(/* webpackChunkName:"octicons/rocket" */ './js/rocket.json')
      case 'rss': return import(/* webpackChunkName:"octicons/rss" */ './js/rss.json')
      case 'ruby': return import(/* webpackChunkName:"octicons/ruby" */ './js/ruby.json')
      case 'screen-full': return import(/* webpackChunkName:"octicons/screen-full" */ './js/screen-full.json')
      case 'screen-normal': return import(/* webpackChunkName:"octicons/screen-normal" */ './js/screen-normal.json')
      case 'search': return import(/* webpackChunkName:"octicons/search" */ './js/search.json')
      case 'server': return import(/* webpackChunkName:"octicons/server" */ './js/server.json')
      case 'settings': return import(/* webpackChunkName:"octicons/settings" */ './js/settings.json')
      case 'shield': return import(/* webpackChunkName:"octicons/shield" */ './js/shield.json')
      case 'sign-in': return import(/* webpackChunkName:"octicons/sign-in" */ './js/sign-in.json')
      case 'sign-out': return import(/* webpackChunkName:"octicons/sign-out" */ './js/sign-out.json')
      case 'smiley': return import(/* webpackChunkName:"octicons/smiley" */ './js/smiley.json')
      case 'squirrel': return import(/* webpackChunkName:"octicons/squirrel" */ './js/squirrel.json')
      case 'star': return import(/* webpackChunkName:"octicons/star" */ './js/star.json')
      case 'stop': return import(/* webpackChunkName:"octicons/stop" */ './js/stop.json')
      case 'sync': return import(/* webpackChunkName:"octicons/sync" */ './js/sync.json')
      case 'tag': return import(/* webpackChunkName:"octicons/tag" */ './js/tag.json')
      case 'tasklist': return import(/* webpackChunkName:"octicons/tasklist" */ './js/tasklist.json')
      case 'telescope': return import(/* webpackChunkName:"octicons/telescope" */ './js/telescope.json')
      case 'terminal': return import(/* webpackChunkName:"octicons/terminal" */ './js/terminal.json')
      case 'text-size': return import(/* webpackChunkName:"octicons/text-size" */ './js/text-size.json')
      case 'three-bars': return import(/* webpackChunkName:"octicons/three-bars" */ './js/three-bars.json')
      case 'thumbsdown': return import(/* webpackChunkName:"octicons/thumbsdown" */ './js/thumbsdown.json')
      case 'thumbsup': return import(/* webpackChunkName:"octicons/thumbsup" */ './js/thumbsup.json')
      case 'tools': return import(/* webpackChunkName:"octicons/tools" */ './js/tools.json')
      case 'trashcan': return import(/* webpackChunkName:"octicons/trashcan" */ './js/trashcan.json')
      case 'triangle-down': return import(/* webpackChunkName:"octicons/triangle-down" */ './js/triangle-down.json')
      case 'triangle-left': return import(/* webpackChunkName:"octicons/triangle-left" */ './js/triangle-left.json')
      case 'triangle-right': return import(/* webpackChunkName:"octicons/triangle-right" */ './js/triangle-right.json')
      case 'triangle-up': return import(/* webpackChunkName:"octicons/triangle-up" */ './js/triangle-up.json')
      case 'unfold': return import(/* webpackChunkName:"octicons/unfold" */ './js/unfold.json')
      case 'unmute': return import(/* webpackChunkName:"octicons/unmute" */ './js/unmute.json')
      case 'unverified': return import(/* webpackChunkName:"octicons/unverified" */ './js/unverified.json')
      case 'verified': return import(/* webpackChunkName:"octicons/verified" */ './js/verified.json')
      case 'versions': return import(/* webpackChunkName:"octicons/versions" */ './js/versions.json')
      case 'watch': return import(/* webpackChunkName:"octicons/watch" */ './js/watch.json')
      case 'x': return import(/* webpackChunkName:"octicons/x" */ './js/x.json')
      case 'zap': return import(/* webpackChunkName:"octicons/zap" */ './js/zap.json')
    }
  }
}
export default data
