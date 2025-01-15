export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <table>
        <tr>
          <td colSpan={2}>
            <button>Unpublish</button>
            <button>Import Existing Content</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>Publish</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>Import from Commons</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>Choose Home Page</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>View Course Stream</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>New Announcement</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>New Analytics</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>View Course Notifications</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
