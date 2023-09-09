// Script to extract locations and facilities in clipboard in CSV format: "loc", "fac".
// 1st if to check for "Display additional results...".
// Last s update is important as last global variable to be updated is returned when running Javascript in Applescript.
// Double quotes and newline escape are the biggest problem for me so pasting into clipboard is the easiest way out.
// The CSV file can be easily imported into Python daraframes.
// Author: Yong Shao Horng (yongsh@google.com)
loc = '';
s = '';
ul = document.querySelector('#easybook-where');
if (document.getElementsByClassName('rbt-menu-pagination-option').length > 0) {
	document.getElementsByClassName('rbt-menu-pagination-option')[0].childNodes[0].click();
	ul = document.querySelector('#easybook-where');
}
for (var itemi = 0; itemi < ul.childNodes.length; itemi++) {
	var item = ul.childNodes[itemi];
	if (item.nodeName == 'LI') {
		fac = item.getAttribute('aria-label');
		dq = String.fromCharCode(34);
		if (fac.startsWith(String.fromCharCode(160)))
			s += dq + " & "\"" & facType & "\"" & " + dq + ',' + dq + loc + dq + ',' + dq + fac.trimStart() + dq + '\\n';
		else
			loc = fac;
	}
}
s += '';