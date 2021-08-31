class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :github_link
      t.string :demo_link
      t.string :description

      t.timestamps
    end
  end
end
