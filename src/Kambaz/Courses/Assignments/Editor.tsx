export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="group" id="wd-group">
              <option value="assignment">ASSIGNMENTS</option>
              <option value="quiz">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="project">PROJECT</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select name="group" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="group" id="wd-submission-type">
              <option value="online">Online</option>
              <option value="online">Offline</option>
            </select>

            <tr>
              <tr>Online Entry Options</tr>
              <tr>
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  name="textEntry"
                  value="textEntry"
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </tr>
              <tr>
                <input
                  type="checkbox"
                  id="wd-website-url"
                  name="websiteURL"
                  value="websiteURL"
                />
                <label htmlFor="websiteURL">Website URL</label>
              </tr>
              <tr>
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  name="mediaRecordings"
                  value="mediaRecordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </tr>
              <tr>
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  name="studentAnnotation"
                  value="studentAnnotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </tr>
              <tr>
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  name="fileUpload"
                  value="fileUpload"
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </tr>
            </tr>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />

            <br />
            <br />

            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input id="wd-assign-to" type="date" value="2025-01-02" />

            <br />
            <br />

            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input id="wd-available-from" type="date" value="2025-01-02" />
              </td>

              <td>
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input id="wd-available-until" type="date" value="2025-01-02" />
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <table width="100%">
        <tr>
          <td align="right">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
